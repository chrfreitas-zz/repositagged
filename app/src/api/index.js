function getRepositories(username) {
  const url = 'http://localhost:9000/respositories';

  return fetch(url, {
    method: 'GET',
    body: {
      username,
    },
  }).then(response => response.json());
}

export default {
  getRepositories,
};
