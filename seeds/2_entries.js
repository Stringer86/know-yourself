/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('entries').del()
    .then(() => {
      return knex('entries').insert([{
        id: 1,
        user_id: 1,
        body: 'Today was a great day. I learned a lot in class and the cute girls talked to me.  I got a big pizza for lunch and ate the whole thing!',
        anger: 3.057,
        disgust: 14.874,
        fear: 1.020,
        joy: 77.171,
        sadness: 11.109,
        openness: 4.742,
        conscientiousness: 62.982,
        extraversion: 85.864,
        agreeableness: 81.769,
        emotional_range: 54.183,
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 2,
      user_id: 1,
      body: 'A friendly reminder to submit your personal branding assignment. (Please note that this is a graduation requirement.) Let me know if you need any help! Hope that you had a great, long labor day weekend! Cheers, Gina',
      anger: 4.339,
      disgust: 2.039,
      fear: 9.889,
      joy: 81.852,
      sadness: 6.297,
      openness: 25.742,
      conscientiousness: 88.982,
      extraversion: 94.864,
      agreeableness: 95.769,
      emotional_range: 77.183,
      created_at: new Date('2016-06-30 14:26:16 UTC'),
      updated_at: new Date('2016-06-30 14:26:16 UTC')
    }

    ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('entries_id_seq', (SELECT MAX(id) FROM entries));"
    );
    });
};
