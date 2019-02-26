import { filterByLocation } from '../selectors/filters';
import { FILTER_BY_LOCATION } from '../constants';
export const filterByLocationAction = (filteredResult) => ({
  type: FILTER_BY_LOCATION,
  payload: filteredResult
});

export const filteredByLocation = (data, filter) => {
  return dispatch => {
    const afterFiltered = filterByLocation(data, filter);
    return dispatch(filterByLocationAction(afterFiltered));
  }
};
