'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const validations = require('../validations/users')

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


router.post('/api/favorites', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { lessonId } = req.body;

  const insertLesson = { lessonId, userId };

  knex('favorites')
    .select(knex.raw('1=1'))
    .where('lesson_id', lessonId)
    .where('user_id', userId)
    .first()
    .then((exists) => {
      if (exists) {
        throw next(boom.create(404, 'User already favorited this lesson'));
      } else {
        return knex('favorites')
          .insert(decamelizeKeys(insertLesson), '*')
          .then((rows) => {
            if (!rows) {
              throw next(boom.create(404, 'Lesson not found'))
            }

            const lesson = camelizeKeys(rows[0]);

            res.send(lesson);
          })
          .catch((err) => {
            next(err);
          });
      }
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/favorites', authorize, (req, res, next) => {
  const { userId } = req.token;

  knex('favorites')
    .innerJoin('lessons', 'lessons.id', 'favorites.lesson_id')
    .where('favorites.user_id', userId)
    .orderBy('favorites.created_at', 'ASC')  // check to make sure it's ordering properly
    .then((rows) => {

      const favorites = camelizeKeys(rows)
      res.send(favorites);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/api/favorites', authorize, (req, res, next) => {
  const { userId } = req.token;
  const lessonId = req.body.lessonId;

  console.log(req.body);
  knex('favorites')
    .where('lesson_id', lessonId)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Favorite not found');
      }

      return knex('favorites')
        .where('lesson_id', lessonId)
        .where('user_id', userId)
        .del();
    })
    .then(() => {
      res.send(camelizeKeys({ lessonId, userId }));
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
