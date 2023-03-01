import { ActionCreator } from 'redux';
import { Dispatch } from 'redux';
import { ACTION_TYPES } from '../../constants/data';
import { DataSet, ViewSet } from './dataActionsType';
import { Feature } from '../../../types/data';
import { getAirportsData } from '../../../services/airports';
import { getStadiumsData } from '../../../services/stadiums';

export const getAllData: ActionCreator<DataSet> = (data: {
    type: string,
    features: Feature[]
}) => {
    return {
        type: ACTION_TYPES.GET_DATA,
        data,
    };
}

export const getView: ActionCreator<ViewSet> = (view: string) => {
    return {
        type: ACTION_TYPES.GET_VIEW,
        view,
    };
}


export const fetchData = (view: string) => async (dispatch: Dispatch) => {
  const apiCall = view === 'airports' ? getAirportsData() : getStadiumsData();
  const response = await apiCall;
  console.log({response})
  dispatch(getAllData(response.data))
}
  
  