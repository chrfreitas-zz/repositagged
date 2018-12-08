const hapi = require('hapi');

const mongodb = require('./configs/mongodb');
const log = require('./configs/log');
const routes = require('./routes');

const start = async () => {
  const server = new hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost*'],
        credentials: true,
      },
    },
  });

  server.state('session', {
    ttl: null,
    isSecure: false,
    encoding: 'base64json',
  });

  await server.register(mongodb);
  await server.register(log);

  routes.map(route => server.route(route));

  await server.start();
  console.log(`Server running at PORT ${server.info.port} ...`);
};

start();
