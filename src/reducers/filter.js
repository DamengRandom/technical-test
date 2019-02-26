import { FILTER_BY_LOCATION } from '../constants';
const initialState = [];

export const filterReducer = (state=initialState, action) => {
  switch(action.type) {
    case FILTER_BY_LOCATION:
      return {
        ...state,
        filtered: action.payload
      };
    default:
      return state;
  }
}
