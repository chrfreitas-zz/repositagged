'use strict'

const hapi = require('hapi')

const registerMongodb = require('./registers/mongodb')
const routes = require('./routes');

const start = async () => {
  const server = new hapi.server({
    port: 3000,
    host: 'localhost'
  })
  
  await server.register(registerMongodb)

  routes.map(route => server.route(route))
    
  await server.start()
  console.log(`Server running at PORT ${server.info.port} ...`)
}

start();
