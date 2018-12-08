const Joi = require('joi');
const Repository = require('../../classes/repository');

const routes = [
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
