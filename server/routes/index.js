const Joi = require('joi');
const unionBy = require('lodash/unionBy');
const api = require('../api');
const Repository = require('../classes/repository');

const routes = [
  {
    method: 'GET',
    path: '/repositories/{username}',
    handler: async (request, h) => {
      const { username } = request.params;
      const { db } = request.mongo;

      const [dbCollection] = await db.collection('repositories').find({ username }).toArray();
      const apiCollection = await api.fetchRespositories(username);

      if (dbCollection) {
        const data = unionBy(dbCollection.repositories, apiCollection, 'id');
        return h.response(data).code(200);
      }

      return h.response(apiCollection).code(200);
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
    method: 'PUT',
    path: '/repositories/',
    handler: async (request, h) => {
      const repository = new Repository(request.payload);

      const data = {
        username: 'chrfreitas',
        repositories: [repository],
      };

      const { db } = request.mongo;
      const result = await db.collection('repositories').insertOne(data);

      const [response] = result.ops;
      return h.response(response).code(200);
    },
    options: {
      validate: {
        payload: {
          id: Joi.number(),
          name: Joi.string(),
          description: Joi.any().optional(),
          url: Joi.string(),
          language: Joi.any().optional(),
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
    path: '/repositories/',
    handler: (request, h) => {
      const repository = {
        ...request.payload,
        updatedAt: Date.now(),
      };

      const { db } = request.mongo;

      db.collection('repositories').updateOne({
        id: repository.id,
      }, {
        $set: { ...repository },
      });

      return h.response().code(200);
    },
    options: {
      validate: {
        payload: {
          id: Joi.number(),
          name: Joi.string(),
          description: Joi.any().optional(),
          url: Joi.string(),
          language: Joi.any().optional(),
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
