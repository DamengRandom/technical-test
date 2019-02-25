import { filterByLocation } from '../selectors/filters';
export const filterByLocationAction = (filteredResult) => ({
  type: 'FILTER_BY_LOCATION',
  payload: filteredResult
});

export const filteredByLocation = (data) => {
  return dispatch => {
    const afterFitered = filterByLocation(data);
    dispatch(() => filterByLocationAction(afterFitered));
  }
};
