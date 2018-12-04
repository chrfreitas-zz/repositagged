const fetch = require('node-fetch');

const URL = 'https://api.github.com';

function fetchRespositories(username) {
  return fetch(`${URL}/users/${username}/starred`)
    .then(response => response.json());
}

module.exports = {
  fetchRespositories,
};
