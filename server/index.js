'use strict'
const hapi = require('hapi')
const hapiMongoDB = require('hapi-mongodb')
const routes = require('./routes');

const start = async () => {
  const server = new hapi.server({
    port: 3000,
    host: 'localhost'
  })
  
  await server.register({
    plugin: hapiMongoDB,
    options: {
      url: 'mongodb://127.0.0.1:27017/repositagged',
      decorate: true,
      settings: {
        poolSize: 10,
        useNewUrlParser: true
      },
    }
  })

  routes.map(route => server.route(route))
    
  await server.start()
  console.log(`Server running at PORT ${server.info.port} ...`)
}

start();
