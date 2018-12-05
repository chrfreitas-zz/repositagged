const Joi = require('joi');
const api = require('../api');
const Repository = require('../classes/repository');

const routes = [
  {
    method: 'GET',
    path: '/repositories/{username}',
    handler: async (request, h) => {
      const { db } = request.mongo;

      const dbRepos = await db.collection('repositories').find().toArray();
      const apiRepos = await api.fetchRespositories(request.params.username);

      const apiRepoSerialized = apiRepos.reduce((total, current) => {
        const repository = new Repository({
          id: current.id,
          name: current.name,
          description: current.description,
          url: current.html_url,
          language: current.language,
        });

        total.push(repository);

        return total;
      }, []);

      const data = [
        ...apiRepoSerialized,
        ...dbRepos,
      ];

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
    method: 'POST',
    path: '/repositories/create',
    handler: async (request, h) => {
      const repository = new Repository(request.payload);

      const { db } = request.mongo;
      const result = await db.collection('repositories').insertOne(repository);

      const [response] = result.ops;
      return h.response(response).code(200);
    },
    options: {
      validate: {
        payload: {
          id: Joi.number(),
          name: Joi.string(),
          description: Joi.string(),
          url: Joi.string(),
          language: Joi.string(),
          tagged: Joi.boolean(),
          createdAt: Joi.number(),
          updatedAt: Joi.number(),
          tags: Joi.string(),
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/repositories/update',
    handler: (request, h) => {
      const { db } = request.mongo;

      const { id, tags } = request.payload;

      db.collection('repositories').updateOne({
        id,
      }, {
        $set: {
          tags,
          updatedAt: Date.now(),
        },
      });

      return h.response().code(200);
    },
    options: {
      validate: {
        payload: {
          id: Joi.number(),
          name: Joi.string(),
          description: Joi.string(),
          url: Joi.string(),
          language: Joi.string(),
          tagged: Joi.boolean(),
          createdAt: Joi.number(),
          updatedAt: Joi.number(),
          tags: Joi.string(),
        },
      },
    },
  },
];

module.exports = routes;
