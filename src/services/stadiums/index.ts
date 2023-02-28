import { useMemo } from 'react';
import axios from "axios";

const baseURL = 'https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/Stadiums/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'
export const getStadiumsData = useMemo(() => {
  const data =
    axios.get(baseURL);
  return data;
}, []);
