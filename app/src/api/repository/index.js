import axios from 'axios';

export const BASE_URL = 'http://localhost:9000';

const update = (repository) => {
  const url = `${BASE_URL}/repositories/create`;
  return axios.post(url, repository).then(response => response.data);
};

export default {
  update,
};
