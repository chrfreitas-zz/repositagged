const api = require('../api')
const Repository = require('../classes/repository')

const routes = [
  {
    method: 'GET',
    path: '/repositories',
    handler: async (request) => {
      const db = request.mongo.db;

      const dbRepos = await db.collection('repositories').find().toArray()
      const apiRepos = await api.fetchRespositories()

      const result = [];
      
      apiRepos.forEach(apiRepo => {
        dbRepos.forEach(dbRepos => {
          if(apiRepo.id === dbRepos.id){
            return result.push(dbRepo)
          }

          const newRepo = new Repository(
            apiRepo.id,
            apiRepo.name,
            apiRepo.description,
            apiRepo.html_url,
            apiRepo.language)
          return result.push(newRepo)
        })
      })

      return result;
    }
  }
]

module.exports = routes