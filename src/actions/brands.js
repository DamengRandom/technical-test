import { READ_BRANDS } from '../constants';
import { fetchBrands } from '../apis/brands';

export const readBrandsAction = (brands) => ({
  type: READ_BRANDS,
  payload: brands
});

export const readBrands = () => {
  return dispatch =>
    fetchBrands().then((res) => dispatch(readBrandsAction(res)));
};
