const mongodb = require('hapi-mongodb')

module.exports = {
  plugin: mongodb,
  options: {
    url: 'mongodb://127.0.0.1:27017/repositagged',
    decorate: true,
    settings: {
      poolSize: 10,
      useNewUrlParser: true
    },
  }
}