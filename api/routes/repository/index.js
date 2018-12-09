const Joi = require('joi');
const Repository = require('../../classes/repository');

const routes = [
  {
    method: 'POST',
    path: '/repositories/',
    handler: (request, h) => {
      const { username } = request.state.session;
      const repository = new Repository(request.payload);

      const { db } = request.mongo;

      db.collection('repositories').updateOne({
        username,
        'repositories.id': repository.id,
      }, {
        $set: {
          'repositories.$': repository,
        },
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
