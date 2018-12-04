export const BASE_URL = 'http://localhost:9000';

const getRepositories = (username) => {
  const url = `${BASE_URL}/repositories/${username}`;

  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
};

const editTags = (id, tags) => {
  const url = `${BASE_URL}/repositories/update`;

  return fetch(url, {
    method: 'POST',
    body: {
      id,
      tags,
    },
  }).then(response => response.json());
};

export default {
  getRepositories,
  editTags,
};
