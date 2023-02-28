import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import dataList from '../../mockData/data.json';



const Details = () => {

const parkLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: ['==', 'class', 'park'],
    paint: {
      'fill-color': '#4E3FC8'
    }
  };
  

const struturedData = dataList.features.map((data: any) => {
    return {
        type: 'FeatureCollection',
        features: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: data.geometry.coordinates
            }
        }
    }
} )
  const [viewport, setViewport] = React.useState({
    longitude: -80.0061616537235,
      latitude:  40.4470579700628,
      zoom: 14,
      width: '100vw',
      height: '100vh'
  });
  return (
    <div>
    <ReactMapGL 
    mapboxAccessToken='pk.eyJ1IjoiYXRlbmFzIiwiYSI6ImNsZHpjM3F6NzB6Z3czdWxncWxhdGk3ODYifQ.DzQfvyS5L721FUPDRrLUZw'
    {...viewport}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    // onMouseMove={viewport => {
    //     setViewport(viewport)
    // }}}
    
>
    {/* {struturedData.map((data: any) => (

      <Marker
        key={`${data.id}-${data.features.geometry.coordinates[0]}`}
        latitude={data.features.geometry.coordinates[1]}
        longitude={data.features.geometry.coordinates[0]}
      >

      </Marker>
    ))

    } */}
    </ReactMapGL>
    </div>
  );
}

export default Details;
