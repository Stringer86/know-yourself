'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const ev = require('express-validation');
const validations = require('../validations/lessons')
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    next();
  });
};

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

router.get('/api/lessons/:id', (req, res, next) => {

  const id = Number.parseInt(req.params.id);
  console.log(id);

  knex('lessons')
  .where('id', id)
  .first()
  .then((row) => {
    if (!row) {
      throw boom.create(404, 'Not Found');
    }

    const lesson = camelizeKeys(row);

    res.send(lesson);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/api/lessons', authorize, ev(validations.post), (req, res, next) => {
  const { userId } = req.token;

  const { title, category, concept, description, published, body, likes } = req.body;

  const insertLesson = { userId, title, category, concept, description, published, body, likes };

  knex('lessons')
      .insert(decamelizeKeys(insertLesson), '*')
      .catch((err) => {
        next(err);
    });
});

module.exports = router;
