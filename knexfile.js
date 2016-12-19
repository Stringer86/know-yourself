'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/introspection_dev'
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
