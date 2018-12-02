const fetch = require('node-fetch')

const URL = 'https://api.github.com/'

const fetchRespositories = () => 
  fetch(`${URL}users/chrfreitas/starred`)
    .then(response => response.json())

module.exports = {
  fetchRespositories,
}
