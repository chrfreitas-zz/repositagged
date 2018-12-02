const good = require('good')

module.exports = {
  plugin: good,
  options: {
    ops:{
        interval: 5000
    },
    reporters: {
        file: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{error: '*'}]
        },{
            module: 'good-squeeze',
            name: 'SafeJson'
        },{
            module: 'rotating-file-stream',
            args: ['hapi-error.log',
            {
                size: '1000B',
                path: './logs'
            }]
        }]
    }
  }
}
