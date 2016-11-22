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

router.post('/api/users', ev(validations.post), (req, res, next) => {
  const { firstName, lastName, userName, email, password } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('user_name', userName)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(400, 'User Name already exists');
      }

      return knex('users')
        .select(knex.raw('1=1'))
        .where('email', email)
        .first();
    })
    .then((exists) => {
      if (exists) {
        throw boom.create(400, 'Email already exists');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      // const { firstName, lastName } = req.body;
      const insertUser = { firstName, lastName, userName, email, hashedPassword };

      return knex('users')
        .insert(decamelizeKeys(insertUser), '*');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/user', authorize, (req, res, next) => {
  const { userId } = req.token;
  console.log(userId);

  knex('users')
    .innerJoin('lessons', 'users.id', 'lessons.user_id')
    .where('lessons.user_id', userId)
    .orderBy('lessons.updated_at', 'ASC')  // check to make sure it's ordering properly
    .then((rows) => {

      const userInfo = camelizeKeys(rows)
      res.send(userInfo);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
