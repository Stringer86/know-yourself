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
        created_at: new Date('2016-10-22 14:26:16 UTC'),
        updated_at: new Date('2016-10-22 14:26:16 UTC')
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
        created_at: new Date('2016-010-30 14:26:16 UTC'),
        updated_at: new Date('2016-010-30 14:26:16 UTC')
      },
      {
        id: 3,
        user_id: 1,
        body: 'I am having a miserable day today.  I forgot that I had a test and think I failed.  My mom yelled at me again for not cleaning the dishes but I didn\'t even use any this week!  Because I did so poorly on the quiz, i decided to talk to the teacher.  The meeting took so long.  I missed my bus.  I hate my life',
        anger: 19.339,
        disgust: 4.584,
        fear: 10.2392,
        joy: 17.016,
        sadness: 58.297,
        openness: 0.670,
        conscientiousness: 4.738,
        extraversion: 0.760,
        agreeableness: 20.552,
        emotional_range: 3.661,
        created_at: new Date('2016-11-01 14:26:16 UTC'),
        updated_at: new Date('2016-11-01 14:26:16 UTC')
      },
      {
        id: 4,
        user_id: 1,
        body: 'It turns out that I didn\'t fail my test!  I\'m so happy.  I know I am stupid for forgetting, but I am really greatful that I didn\'t fail the test.  YES!!!!!  I want to try to learn a new skill this week.  Perhaps, I will learn how to code!  Maybe It will be easy.  I can\'t wait for the weekend!',
        anger: 37.4079,
        disgust: 0.584,
        fear: 4.239,
        joy: 53.176,
        sadness: 9.123,
        openness: 0.187,
        conscientiousness: 20.738,
        extraversion: 0,
        agreeableness: 44.054,
        emotional_range: 17.387,
        created_at: new Date('2016-11-02 14:26:16 UTC'),
        updated_at: new Date('2016-11-02 14:26:16 UTC')
      },
      {
        id: 5,
        user_id: 1,
        body: 'Poor old Granddad I laughed at all his words. I thought he was a bitter man. He spoke of women\'s ways. They\'ll trap you, then they use you before you even know. For love is blind and you\'re far too kind. Don\'t ever let it show. I wish that I knew what I know now when I was younger. I wish that I knew what I know now when I was stronger. The can-can such a pretty show. Will steal your heart away.But backstage back on earth again, The dressing rooms are grey. They come on strong and it ain\'t too long For they make you feel a man. But love is blind and you soon will find, You\'re just a boy again. When you want her lips, you get her cheek Makes you wonder where you are. If you want some more then she\'s fast asleep. you\'re just twinkling with the stars. Poor young grandson, there\'s nothing I can say. You\'ll have to learn, just like me. And that\'s the hardest way. I wish that I knew what I know now When I was younger',
        anger: 10.846,
        disgust: 10.584,
        fear: 13.239,
        joy: 22.176,
        sadness: 57.123,
        openness: 26.187,
        conscientiousness: 8.338,
        extraversion: 5.19,
        agreeableness: 97.054,
        emotional_range: 15.387,
        created_at: new Date('2016-11-03 14:26:16 UTC'),
        updated_at: new Date('2016-11-03 14:26:16 UTC')
      }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('entries_id_seq', (SELECT MAX(id) FROM entries));"
    );
    });
};
