const hapi = require('hapi');

const mongodb = require('./registers/mongodb');
const log = require('./registers/log');
const routes = require('./routes');

const start = async () => {
  const server = new hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost*'],
      },
    },
  });

  await server.register(mongodb);
  await server.register(log);

  routes.map(route => server.route(route));

  await server.start();
  console.log(`Server running at PORT ${server.info.port} ...`);
};

start();
