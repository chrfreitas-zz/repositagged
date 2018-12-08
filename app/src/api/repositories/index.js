import axios from 'axios';

export const BASE_URL = 'http://localhost:9000';

const sync = (username) => {
  const url = `${BASE_URL}/repositories/sync/${username}`;
  return axios.get(url).then(response => response.data);
};

const search = (query) => {
  const url = `${BASE_URL}/repositories/search?query=${query}`;
  return axios.get(url).then(response => response.data);
};

export default {
  sync,
  search,
};
