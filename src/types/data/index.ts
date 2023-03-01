export interface Feature {
  type: string;
  id: number;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    OBJECTID: 1;
    GLOBAL_ID: string;
    NAME: string;
    LATITUDE: string;
    LONGITUDE: string;
    CITY: string;
    STATE: string;
    STATUS_CODE: string;
    OPENING_ON: null;
  };
}

export interface DataType {
  type: string;
  features: Feature[];
  view: string;
}
