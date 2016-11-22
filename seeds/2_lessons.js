'use strict';

exports.seed = function(knex) {
  return knex('lessons').del()
    .then(() => {
      return knex('lessons').insert([{
        id: 1,
        user_id: 1,
        title: 'What exactly is React?',
        category: 'React',
        concept: 'general understanding',
        description: 'I will be explaining what React is and why it is useful',
        published: false,
        body: 'React is often described as “the V in the MVC structure”. This also happens to be the least tangible explanation one could give a newcomer, as (V)iews are typically logic-less files that are driven by a controller. Further, frameworks like Angular, Backbone, Ember, and more already have sufficient view layers — which then begs the question, why do we need to replace the V in MVC with React? The answer is that React doesn’t necessarily want to replace our views — it wants to augment them by allowing you to create highly reusable UI components (tab bars, comment boxes, pop up modals, lists, sortable tables, etc). In other words, the big idea behind React is this: what if you could create your own HTML element that has customized functionality? For example, one could make a <CommentBox> element that would display a textarea, run validations on the text typed into the textarea, submits the form when the enter key is pressed, etc — all just by including one line of code: <CommentBox></CommentBox>. (For those of you coming from the Angular world, you can think of React Components as a close analogy to Directives).',
        likes: 0,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 1,
        category: 'Angular',
        concept: 'general understanding',
        title: 'What exactly is Angular?',
        description: 'I will be explaining what React is and why it is useful',
        published: false,
        body: 'This AngularJS course is built with the intent of exposing you to the best available resources on each Angular topic. Our desire is to present these topics richly, and from a variety of vantage points, in order to afford you a more complete perspective on them. The learning curve of AngularJS can be described as a hockey stick. Getting started with apps featuring basic functionality is delightfully easy. However, building more complex apps often require understanding Angulars inner workings. Failure to do so will cause development to become awkward and cumbersome. With AngularJS, the "Ready, Fire, Aim" learning methodology of duct taping together a handful of tutorials and a cursory glance through the documentation will lead to confusion and frustration. This curriculum is designed to properly guide you through each of the key Angular concepts thoroughly with a broad exposure to high quality content. With your eventual mastery of AngularJS, you will be able to fluently and efficiently construct large-scale applications.',
        likes: 0,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));"
      );
    });
};
