'use strict';

exports.seed = function(knex) {
  return knex('wish_list').del()
    .then(() => {
      return knex('wish_list')
      .insert(
        [{
          id: 1,
          question: "Could someone explain how state works in react?",
          category: "React",
          upvotes: 5,
          user_id: 2
        },
        {
          id: 2,
          question: "How does react router work?",
          category: "React",
          upvotes: 20,
          user_id: 1
        },
        {
          id: 3,
          question: "How does two way data binding work in angular?",
          category: "Angular",
          upvotes: 42,
          user_id: 1
        },
        {
          id: 4,
          question: "What is ember? I have no idea",
          category: "Ember",
          upvotes: 42,
          user_id: 2
        }]
      );
    })
    .then(() => {
      return knex.raw("SELECT setval('wish_list_id_seq', (SELECT MAX(id) FROM wish_list));"
      );
    });
};
