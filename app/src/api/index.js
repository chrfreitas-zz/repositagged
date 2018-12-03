function getRepositories(username) {
  const url = `http://localhost:9000/respositories?username=${username}`;

  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
}

export default {
  getRepositories,
};
