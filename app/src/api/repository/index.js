import axios from '..';

const update = (repository) => {
  const url = 'repositories/';
  return axios.post(url, repository).then(response => response.data);
};

export default {
  update,
};
