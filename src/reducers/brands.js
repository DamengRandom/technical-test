import { READ_BRANDS } from '../constants';
const initialState = [];

export const brandReducer = (state=initialState, action) => {
  switch(action.type) {
    case READ_BRANDS:
      return {
        ...state,
        brands: action.payload
      };
    default:
      return state;
  }
};
