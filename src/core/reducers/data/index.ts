import { AnyAction } from 'redux';
import { ACTION_TYPES } from '../../constants/data';
import { DataType } from '../../../types/data';

const initialState = {
    data: {
        type: '',
        features: []
    },
    view: ''
};

const dataReducer = (state: DataType = initialState, action: AnyAction) => {
    switch (action.type) {
        case ACTION_TYPES.GET_DATA:
            const { data } = action;
            return {
                ...state,
                data
            };
        case ACTION_TYPES.GET_VIEW:
            const { view } = action;
            return {
                ...state,
                view
            };
        default:
            return state;
    }
};

export default dataReducer;
