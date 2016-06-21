const path = require( 'path' );
const rootPath = path.normalize( `${__dirname}/..` );
const env = process.env.NODE_ENV || 'development';

const config = {
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

module.exports = config[ env ];
