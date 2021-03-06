'use strict';

const express = require('express');
const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const ev = require('express-validation');
const validations = require('../validations/token.js');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err) => {
    res.verify = err === null;
    next();
  });
};

router.get('/api/token', authorize, (req, res) => {
  res.send(res.verify);
});

router.post('/api/token', ev(validations.post), (req, res, next) => {
  const { email, password } = req.body;

  let user;

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password');
      }

      user = camelizeKeys(row);

      return bcrypt.compare(password, user.hashedPassword);
    })
    .then(() => {
      delete user.hashedPassword;

      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3h'
      });

      res.cookie('token', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.send({ user, bool: true });
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(400, 'Bad email or password');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/token', (_req, res, _next) => {
  res.clearCookie('token');
  res.send(true);
});

module.exports = router;
