import { Action } from "redux";
import { ACTION_TYPES } from "../../constants/data";
import { Feature } from "../../../types/data";

export interface DataSet extends Action {
  type: typeof ACTION_TYPES.GET_DATA;
  data: {
    type: string;
    features: Feature[];
  };
}

export interface ViewSet extends Action {
  type: typeof ACTION_TYPES.GET_VIEW;
  view: string;
}
