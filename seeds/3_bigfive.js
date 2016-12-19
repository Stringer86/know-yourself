/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('bigfive').del()
    .then(() => {
      return knex('bigfive').insert([{
        id: 1,
        openness: 'Openness is a general appreciation for art, emotion, adventure, unusual ideas, imagination, curiosity, and variety of experience. People who are open to experience are intellectually curious, open to emotion, sensitive to beauty and willing to try new things. They tend to be, when compared to closed people, more creative and more aware of their feelings. They are also more likely to hold unconventional beliefs. A particular individual, however, may have a high overall openness score and be interested in learning and exploring new cultures but have no great interest in art or poetry.',
        conscientiousness: 'Conscientiousness is a tendency to display self-discipline, act dutifully, and strive for achievement against measures or outside expectations. It is related to the way in which people control, regulate, and direct their impulses. High scores on conscientiousness indicate a preference for planned rather than spontaneous behavior. The average level of conscientiousness rises among young adults and then declines among older adults.',
        extraversion: 'Extraversion is characterized by breadth of activities (as opposed to depth), surgency from external activity/situations, and energy creation from external means. The trait is marked by pronounced engagement with the external world. Extraverts enjoy interacting with people, and are often perceived as full of energy. They tend to be enthusiastic, action-oriented individuals. They possess high group visibility, like to talk, and assert themselves. Introverts have lower social engagement and energy levels than extraverts. They tend to seem quiet, low-key, deliberate, and less involved in the social world. Their lack of social involvement should not be interpreted as shyness or depression; instead they are more independent of their social world than extraverts. Introverts need less stimulation than extraverts and more time alone. This does not mean that they are unfriendly or antisocial; rather, they are reserved in social situations.',
        agreeableness: 'The agreeableness trait reflects individual differences in general concern for social harmony. Agreeable individuals value getting along with others. They are generally considerate, kind, generous, trusting and trustworthy, helpful, and willing to compromise their interests with others. Agreeable people also have an optimistic view of human nature.  Disagreeable individuals place self-interest above getting along with others. They are generally unconcerned with others\' well-being, and are less likely to extend themselves for other people. Sometimes their skepticism about others\' motives causes them to be suspicious, unfriendly, and uncooperative.',
        emotional_range:'Neuroticism is the tendency to experience negative emotions, such as anger, anxiety, or depression. It is sometimes called emotional instability, or is reversed and referred to as emotional stability. According to Eysenck\'s (1967) theory of personality, neuroticism is interlinked with low tolerance for stress or aversive stimuli. Those who score high in neuroticism are emotionally reactive and vulnerable to stress. They are more likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult. Their negative emotional reactions tend to persist for unusually long periods of time, which means they are often in a bad mood. For instance, neuroticism is connected to a pessimistic approach toward work, confidence that work impedes personal relationships, and apparent anxiety linked with work.  Furthermore, those who score high on neuroticism may display more skin-conductance reactivity than those who score low on neuroticism.  These problems in emotional regulation can diminish the ability of a person scoring high on neuroticism to think clearly, make decisions, and cope effectively with stress.[citation needed] Lacking contentment in one\'s life achievements can correlate with high neuroticism scores and increase one\'s likelihood of falling into clinical depression. Moreover, individuals high in neuroticism tend to experience more negative life events, but neuroticism also changes in response to positive and negative life experiences. At the other end of the scale, individuals who score low in neuroticism are less easily upset and are less emotionally reactive. They tend to be calm, emotionally stable, and free from persistent negative feelings. Freedom from negative feelings does not mean that low-scorers experience a lot of positive feelings.'
      }
    ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('bigfive_id_seq', (SELECT MAX(id) FROM bigfive));"
    );
    });
};
