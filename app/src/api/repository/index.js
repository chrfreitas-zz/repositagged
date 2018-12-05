import axios from 'axios';

export const BASE_URL = 'http://localhost:9000';

const create = (repository) => {
  const url = `${BASE_URL}/repositories/`;
  return axios.put(url, repository).then(response => response.data);
};

const update = (repository) => {
  const url = `${BASE_URL}/repositories/`;
  return axios.put(url, repository).then(response => response.data);
};

export default {
  create,
  update,
};
