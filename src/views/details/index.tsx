import * as React from 'react';
import Map, {Source, Layer} from 'react-map-gl';
import dataList from '../../mockData/data.json'

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

const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
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

const Details = () => {
  const [viewport, setViewport] = React.useState();
  return (
    <Map initialViewState={{
      longitude: -122.45,
      latitude: 37.78,
      zoom: 14
    }}>{struturedData.map((data: any) => (
        <div key={`${data.id}-${data.features.geometry.coordinates[0]}`}>
      <Source id="my-data" type="geojson" data={data}>
        {/* <Layer {...parkLayer} /> */}
      </Source>
        </div>
    ))

    }
    </Map>
  );
}

export default Details;
