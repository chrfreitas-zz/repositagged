const api = require('./api')

const routes = [
  {
    method: 'GET',
    path: '/repositories',
    handler: async (request) => {
      const db = request.mongo.db;

      const x = await db.collection('repositories').find().toArray()
      const y = await api.fetchRespositories()

      return { x, y }
    }
  }
]

module.exports = routes