import axios from 'axios';

const baseURL = `http://localhost:4444/list`;

export const fetchBrands = () => {
  return axios.get(baseURL).then(res => res.data);
};
