'use strict';

exports.seed = function(knex) {
  return knex('wish_list').del()
    .then(() => {
      return knex('wish_list')
      .insert(
        [{
          id: 1,
          question: "do you even?",
          category: "React",
          upvotes: 5,
          user_id: 1
        },
        {
          id: 2,
          question: "do you like?",
          category: "Angular",
          upvotes: 20,
          user_id: 1
        },
        {
          id: 3,
          question: "do you jeeze?",
          category: "Ember",
          upvotes: 42,
          user_id: 1
        }]
      );
    })
    .then(() => {
      return knex.raw("SELECT setval('wish_list_id_seq', (SELECT MAX(id) FROM wish_list));"
      );
    });
};
