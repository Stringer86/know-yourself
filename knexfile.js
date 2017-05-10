'use strict';
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/introspection_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    },
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/instrospection_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
