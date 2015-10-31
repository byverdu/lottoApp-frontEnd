var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'lottoapp-front-end'
    },
    port: 3000,
    db: 'mongodb://localhost/lottoapp'
  },

  test: {
    root: rootPath,
    app: {
      name: 'lottoapp-front-end'
    },
    port: 3000,
    db: 'mongodb://localhost/lottoapp'
  },

  production: {
    root: rootPath,
    app: {
      name: 'lottoapp-front-end'
    },
    port: 3000,
    db: 'mongodb://localhost/lottoapp'
  }
};

module.exports = config[env];
