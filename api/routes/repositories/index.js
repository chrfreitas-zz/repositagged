const Joi = require('joi');
const unionBy = require('lodash/unionBy');
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
      return h.response(data).state('session', { username }).code(200);
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
      const { username } = request.state.session;
      const { query } = request.query;
      const { db } = request.mongo;

      if (query === '') {
        const [data] = await db.collection('repositories').find({
          username,
        }).toArray();

        return h.response(data).code(200);
      }

      const result = await db.collection('repositories').aggregate([{
        $unwind: '$repositories',
      }, {
        $match: {
          'repositories.tags': query,
        },
      }]).toArray();

      const data = {
        repositories: result.map(item => item.repositories),
      };

      return h.response(data).code(200);
    },
  },
];

module.exports = routes;
