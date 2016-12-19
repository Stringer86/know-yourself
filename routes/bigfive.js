/* eslint-disable max-len camelcase */
'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();



router.get('/api/bigfive', (req, res, next) => {

  knex('bigfive')
    .select('*')
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'No data!');
      }

      const descriptions = camelizeKeys(row);

      res.send(descriptions);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
