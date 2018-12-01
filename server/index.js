'use strict'
const Hapi = require('hapi')

const server = new Hapi.server({
  port: 3000,
  host: 'localhost'
})
  
server.start()
console.log(`Server running at PORT ${server.info.port} ...`)