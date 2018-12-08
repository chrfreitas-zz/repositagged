const Joi = require('joi');
const unionBy = require('lodash/unionBy');
const differenceWith = require('lodash/differenceWith');
const isEqual = require('lodash/isEqual');
const github = require('../../github');

const routes = [
  {
    method: 'GET',
    path: '/repositories/sync/{username}',
    handler: async (request, h) => {
      const { username } = request.params;
      const { db } = request.mongo;

      const githubRepositories = await github.fetchRespositories(username);
      const dbRepositories = await db.collection('repositories').findOne({
        username,
      }) || {};

      db.collection('repositories').deleteOne({ username });

      const repositories = unionBy(dbRepositories.repositories, githubRepositories, 'id');

      const data = {
        username,
        repositories,
      };

      db.collection('repositories').insertOne(data);
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
