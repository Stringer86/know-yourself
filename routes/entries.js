/* eslint-disable max-len */
'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const ev = require('express-validation');
const validations = require('../validations/entries');
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

router.get('/api/entries', authorize, (req, res, next) => {
  const { userId } = req.token;
  
  knex('entries')
    .where('entries.user_id', userId)
    .orderBy('entries.updated_at', 'ASC')  // check to make sure it's ordering properly
    .then((rows) => {
      const userEntries = camelizeKeys(rows);

      res.send(userEntries);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/api/entries', authorize, ev(validations.post), (req, res, next) => {
  const { userId } = req.token;
  const { body, anger, disgust, fear, joy, sadness, openness, conscientiousness, extraversion, agreeableness, emotionalRange } = req.body;
  const insertEntry = { userId, body, anger, disgust, fear, joy, sadness, openness, conscientiousness, extraversion, agreeableness, emotionalRange };

  knex('entries')
      .insert(decamelizeKeys(insertEntry), '*')
      .then((row) => {
        res.send({ entry: row, posted: true });
      })
      .catch((err) => {
        next(err);
      });
});

router.delete('/api/entries/:id', authorize, (req, res, next) => {
  const { userId } = req.token;

  const id = Number.parseInt(req.params.id);

  knex('entries')
    .where('id', id)
    .del()
    .then(() => {
      res.send(true);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
