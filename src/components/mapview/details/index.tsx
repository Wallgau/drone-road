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

const Details = () => {
  const [longitude, setLongitude] = useState<number>(-80.0061616537235);
  const [latitude, setLatitude] = useState<number>(40.4470579700628);
  const [zoom, setZoom] = useState(15);
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
          key={`${dataList.features[0].id}-${dataList.features[0].geometry.coordinates[0]}`}
          latitude={dataList.features[0].geometry.coordinates[1]}
          longitude={dataList.features[0].geometry.coordinates[0]}
        >
          {/* {view === 'airports' ?  */}
          <div>{airportIcon}</div>
          {/* // : <div>{stadiumIcon}</div>} */}
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Details;
