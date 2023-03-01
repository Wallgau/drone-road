import { useEffect, useRef, useState } from "react";
import ReactMapGL, {
  FullscreenControl,
  MapRef,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import dataList from "../../../mockData/data.json";
import { airportIcon } from "../../../assets/icons/airportIcon";
import { stadiumIcon } from "../../../assets/icons/stadiumIcon";
import { Feature } from "../../../types/data";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store";

const Details = (feature: Feature) => {
  const geo = feature.geometry;
  const [longitude, setLongitude] = useState<number | undefined>(
    geo?.coordinates[0]
  );
  const [latitude, setLatitude] = useState<number | undefined>(
    geo?.coordinates[1]
  );
  const [zoom, setZoom] = useState(15);
  const view = useSelector((state: RootState) => state.dataReducer.view);
  const mapRef = useRef<MapRef | null>(null);

  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    width: "590px",
    height: "590px",
    center: [longitude, latitude],
    zoom,
  });

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.on("move", () => {
      setLongitude(Number(mapRef.current?.getCenter().lng.toFixed(4)));
      setLatitude(Number(mapRef.current?.getCenter().lat.toFixed(4)));
      setZoom(Number(mapRef.current?.getZoom().toFixed(2)));
    });
  });

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
      center: [longitude, latitude],
      zoom,
    });
  }, [longitude, latitude, zoom]);
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <ReactMapGL
        initialViewState={viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={() =>
          setViewport({
            ...viewport,
            latitude,
            longitude,
            center: [longitude, latitude],
            zoom,
          })
        }
        ref={mapRef}
      >
        <FullscreenControl />
        <NavigationControl />
        <Marker
          key={`${feature.id}-${geo.coordinates[0]}`}
          latitude={geo?.coordinates[1]}
          longitude={geo?.coordinates[0]}
        >
          {view === "airports" ? (
            <div>{airportIcon}</div>
          ) : (
            <div>{stadiumIcon}</div>
          )}
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Details;
