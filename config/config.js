var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'lottoApp-front-end'
    },
    port: 3000,
    db: 'mongodb://localhost/lottoApp'
  },

  test: {
    root: rootPath,
    app: {
      name: 'lottoApp-front-end'
    },
    port: 3000,
    db: 'mongodb://localhost/lottoApp'
  },

  production: {
    root: rootPath,
    app: {
      name: 'lottoApp-front-end'
    },
    port: 3000,
    db: 'mongodb://localhost/lottoApp'
  }
};

module.exports = config[env];
