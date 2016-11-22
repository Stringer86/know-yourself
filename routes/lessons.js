'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// const ev = require('express-validation');
// const validations = require('../validations/books');
// eslint-disable-next-line new-cap
const router = express.Router();

// YOUR CODE HERE
router.get('/api/lessons', (_req, res, next) => {
  knex('lessons')
    .orderBy('updated_at')
    .then((rows) => {
      const lessons = camelizeKeys(rows);

      res.send(lessons);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
