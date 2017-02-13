/* eslint-disable max-len camelcase */
'use strict';

const express = require('express');
const watson = require('watson-developer-cloud');
const _ = require('lodash');

const TONE_ANALYZER = watson.tone_analyzer({
  username: '4d0064c5-9124-4d72-bba8-03350465b3e7',
  password: 'LsCnlrwMFdpv',
  version: 'v3',
  version_date: '2016-05-19'
});

const router = express.Router();

router.post('/api/analyzer', (req, res) => {
  const { body } = req.body;

  const apiCall = new Promise((resolve, reject) => {
    TONE_ANALYZER.tone({ text: body }, (err, tone) => {
      if (err) {
        return reject(err);
      }

      const emotionScores = tone.document_tone.tone_categories[0].tones;
      const anger = emotionScores[0].score * 100;
      const disgust = emotionScores[1].score * 100;
      const fear = emotionScores[2].score * 100;
      const joy = emotionScores[3].score * 100;
      const sadness = emotionScores[4].score * 100;

      const sentencesArr = tone.sentences_tone;

      const sentences = sentencesArr.map((sentence) => {
        if (sentence.tone_categories[0]) {
          const tones = sentence.tone_categories[0].tones;
          const text = sentence.text;

          return {
            text,
            highest: _.chain(tones).sortBy('score').last().value().tone_name
          };
        } else { // watson api can't find tone of short sentences.
          const text = sentence.text;

          return {
            text,
            highest: 'none'
          };
        }
      });

      return resolve({
        sentences,
        emotions: { anger, disgust, fear, joy, sadness }
      });
    });
  });

  apiCall.then((data) => {
    res.send(data);
  })
  .catch((err) => {
    return err;
  });
});

module.exports = router;
