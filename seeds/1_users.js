/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Chase',
        last_name: 'Klingel',
        user_name: 'FreshPrince',
        email: 'chase@gmail.com',
        hashed_password: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va', // ambitionz
        photo_url: 'http://www.jesus-is-savior.com/Evils%20in%20America/Rock-n-Roll/gene_simmons.jpg',
        bio: 'In addition to being a senior developer at google, I also play bass in a Kiss cover band',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      },
      {
        id: 2,
        first_name: 'Ken',
        last_name: 'McGrady',
        user_name: 'Adele',
        email: 'ken@gmail.com',
        hashed_password: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va', // ambitionz
        photo_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAjYAAAAJDFlYWJlNzk3LTY5YzYtNDk3Yy1iNWQwLTAwZTkzOWVhZGY1OA.jpg',
        bio: 'Everything I learned in life, I learned at Galvanize',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }
    ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    );
    });
};
