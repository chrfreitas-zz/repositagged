const Joi = require('joi');
const unionBy = require('lodash/unionBy');
const github = require('../github');
const Repository = require('../classes/repository');

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
  {
    method: 'GET',
    path: '/repository/{id}',
    handler: async (request, h) => {
      const { db } = request.mongo;

      const [data] = await db.collection('repositories').find({
        id: request.params.id,
      }).toArray();

      return h.response(data).code(200);
    },
    options: {
      validate: {
        params: {
          id: Joi.string(),
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/repositories/',
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
      const repository = new Repository(request.payload);

      const { db } = request.mongo;

      db.collection('repositories').updateOne({
        id: repository.id,
      }, {
        $set: { ...repository },
      });

      return h.response(repository).code(200);
    },
    options: {
      validate: {
        payload: {
          _id: Joi.string(),
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
