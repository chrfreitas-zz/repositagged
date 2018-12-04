const API = 'http://localhost:9000';

function getRepositories(username) {
  const url = `${API}/repositories/${username}`;

  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
}

export default {
  getRepositories,
};
