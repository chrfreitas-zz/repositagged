const Joi = require('joi');
const unionBy = require('lodash/unionBy');
const github = require('../../github');

const routes = [
  {
    method: 'GET',
    path: '/repositories/{username}',
    handler: async (request, h) => {
      const { username } = request.params;
      const { db } = request.mongo;

      const dbRepositories = await db.collection('repositories').find().toArray();
      const apiRepositories = await github.fetchRespositories(username);

      const data = unionBy(dbRepositories, apiRepositories, 'id');

      return h.response(data).code(200);
    },
    options: {
      validate: {
        params: {
          username: Joi.string(),
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/repositories/search',
    handler: async (request, h) => {
      const { query } = request.query;
      const { db } = request.mongo;

      const data = await db.collection('repositories').find({
        tags: query,
      }).toArray();
      
      return h.response(data).code(200);
    },
  },
];

module.exports = routes;
