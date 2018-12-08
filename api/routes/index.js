const repositoriesRoute = require('./repositories');
const repositoryRoute = require('./repository');

const routes = [
  ...repositoriesRoute,
  ...repositoryRoute,
];

module.exports = routes;
