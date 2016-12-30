/* eslint-disable max-len */
'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const ev = require('express-validation');
const validations = require('../validations/entries');
const { camelizeKeys, decamelizeKeys } = require('humps');
const watson = require('watson-developer-cloud');

const TONE_ANALYZER = watson.tone_analyzer({
  username: '34f3a33a-9ffd-45aa-9fc0-c17cfe16cbc8',
  password: 'KR0TZ6CmuE8X',
  version: 'v3',
  version_date: '2016-05-19'
});

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

router.get('/api/entries/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('entries')
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

router.post('/api/entries', authorize, ev(validations.post), (req, res, next) => {
  const { userId } = req.token;
  const { body } = req.body;

  const apiCall = new Promise((resolve, reject) => {

    TONE_ANALYZER.tone({ text: body },
    function(err, tone) {
      if (err) {
        return reject (err);
      }

      const emotionScores = tone['document_tone']['tone_categories'][0].tones
      const anger = emotionScores[0].score * 100;
      const disgust = emotionScores[1].score * 100;
      const fear = emotionScores[2].score * 100;
      const joy = emotionScores[3].score * 100;
      const sadness = emotionScores[4].score * 100;

      const bigFiveScores = tone['document_tone']['tone_categories'][2].tones;
      const openness = bigFiveScores[0].score * 100;
      const conscientiousness = bigFiveScores[1].score * 100;
      const extraversion = bigFiveScores[2].score * 100;
      const agreeableness = bigFiveScores[3].score * 100;
      const emotionalRange = bigFiveScores[4].score * 100;

      return resolve({
        anger,
        disgust,
        fear,
        joy,
        sadness,
        openness,
        conscientiousness,
        extraversion,
        agreeableness,
        emotionalRange,
      });
    })
  })


  apiCall.then((data) => {
    const insertEntry = {
      userId,
      body,
      anger: data.anger,
      disgust: data.disgust,
      fear: data.disgust,
      joy: data.joy,
      sadness: data.sadness,
      openness: data.openness,
      conscientiousness: data.conscientiousness,
      extraversion: data.extraversion,
      agreeableness: data.agreeableness,
      emotionalRange: data.emotionalRange
    };
    knex('entries')
        .insert(decamelizeKeys(insertEntry), '*')
        .then((row) => {
          const entry = row;

          delete entry[0]['user_id']

          res.send(entry);
        })
        .catch((err) => {
          next(err);
        });
  })
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
