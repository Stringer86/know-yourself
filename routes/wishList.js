/* eslint-disable max-len*/
'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const validations = require('../validations/wishList');

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

router.post('/api/wishList', authorize, ev(validations.post), (req, res, next) => {
  const { userId } = req.token;
  const { question, category } = req.body;

  const insertQuestion = { question, category, userId };

  knex('wish_list')
    .insert(decamelizeKeys(insertQuestion), '*')
    .then((rows) => {
      if (!rows) {
        throw next(boom.create(404, 'Question not found'));
      }

      const wishListQuestion = camelizeKeys(rows[0]);

      res.send(wishListQuestion);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/api/wishList/:id', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { upvotes } = req.body;
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('wish_list')
    .where('id', id)
    .first()
    .then((wish) => {
      if (!wish) {
        throw next(boom.create(404, 'Question not found'));
      }

      const updateWish = { upvotes };

      return knex('wish_list')
        .update(decamelizeKeys(updateWish), '*')
        .where('id', id);
    })
    .then((rows) => {
      const wish = camelizeKeys(rows[0]);

      res.send(wish);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/wishList', (req, res, next) => {
  knex('wish_list')
    .orderBy('upvotes', 'asc')
    .then((rows) => {
      const wishList = camelizeKeys(rows);

      res.send(wishList);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/wishList/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('wish_list')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const wishListQuestion = camelizeKeys(row);

      res.send(wishListQuestion);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/api/wishList/:id', authorize, (req, res, next) => {
  let wishListQuestion;
  const id = req.params.id;

  if (isNaN(id)) {
    return next(boom.create(404, 'Not found'));
  }

  knex('wish_list')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw next(boom.create(404, 'Wish List question not found'));
      }

      wishListQuestion = camelizeKeys(row);

      return knex('wish_list')
        .where('id', id)
        .del();
    }).then(() => {
      delete wishListQuestion.id;

      res.send(wishListQuestion);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
