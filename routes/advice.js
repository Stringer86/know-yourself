/* eslint-disable max-len */
'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const request = require("request");
const striptags = require('striptags');





// eslint-disable-next-line new-cap
const router = express.Router();




router.get('/api/donors', (req, res, next) => {

const apiCall = new Promise ((resolve, reject) => {

  const categories = ['Performing Arts', 'Visual Arts', 'Music', 'Sports', 'Nutrition', 'Literacy', 'Foreign Languages',
  'ESL', 'History', 'Geography', 'Civics', 'Economics', 'Social Sciences', 'Health', 'Applied Science', 'Environmental Science', 'Mathematics',
  'Early Development', 'Community Service', 'Character Education', 'Parental Involvement'];

  const choice = categories[Math.floor(Math.random() * categories.length)];


  const options = { method: 'GET',
    url: 'https://api.donorschoose.org/common/json_feed.html',
    qs: { keywords: choice, APIKey: 'DONORSCHOOSE' },
    headers:
     { 'postman-token': '8164f022-49c8-b063-6363-9053f2eab2fb',
       'cache-control': 'no-cache' } };

  request(options, function (error, response, body) {
  if (error) throw new Error(error);

  const proposals = JSON.parse(body).proposals;

  return resolve(proposals);
});

});

apiCall.then((data) => {
  let send = data[2]
  striptags(send.shortDescription)
  res.send(send)
}).catch((err) => {
  console.log(err);
})
})

router.get('/api/instructables', (req, res, next) => {
  const params = ['recent', 'featured', 'popular']
  const param = params[Math.floor(Math.random() * (params.length -1))]
  const options = { method: 'GET',
    url: `https://devru-instructables.p.mashape.com/list?sort=${param}`,
    headers:
     { 'postman-token': '44ad6566-6ccb-1afa-f543-0fece6a6532a',
       'cache-control': 'no-cache',
       accept: 'application/json',
       'x-mashape-key': 'SkmHKhZ4fgmshGNjSYkJbK0MIyMHp1OC5agjsn1BkV5CZOxjFq' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  const data = JSON.parse(body).items;
  const length = Math.floor(Math.random() * (data.length -1))

  res.send(data[length])
});
});



module.exports = router;
