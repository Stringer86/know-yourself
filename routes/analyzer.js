/* eslint-disable max-len */
'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const watson = require('watson-developer-cloud');
const _ = require('lodash');


const TONE_ANALYZER = watson.tone_analyzer({
  username: '85a4ba31-6bdb-4e9b-9574-555ff80921e9',
  password: 'hYbMkblAhgqJ',
  version: 'v3',
  version_date: '2016-05-19'
});

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/api/analyzer', (req, res, next) => {
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

      const sentencesArr= tone['sentences_tone']

      const sentences = sentencesArr.map((sentence) => {
        if (sentence['tone_categories'][0]) {
          let tones = sentence['tone_categories'][0].tones
          let text = sentence.text;
          return {text: text ,
                  highest: _.chain(tones).sortBy('score').last().value().tone_name
                }
        } else {  // necessary since watson api can't find tone of short sentences.
          let text = sentence.text;
          return {text: text ,
                 highest: 'none'
               }
        }

      })


      return resolve({ sentences: sentences,
                       emotions: { anger, disgust, fear, joy, sadness }
      });
    })
  })

  apiCall.then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;
