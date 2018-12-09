import axios from '..';

const sync = (username) => {
  const url = `repositories/sync/${username}`;
  return axios.get(url).then(response => response.data);
};

const search = (query) => {
  const url = `repositories/search?query=${query}`;
  return axios.get(url).then(response => response.data);
};

export default {
  sync,
  search,
};
