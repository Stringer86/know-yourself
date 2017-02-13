'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('bigfive', (table) => {
    table.increments();
    table.text('openness').notNullable().defaultTo('');
    table.text('conscientiousness').notNullable().defaultTo('');
    table.text('extraversion').notNullable().defaultTo('');
    table.text('agreeableness').notNullable().defaultTo('');
    table.text('emotional_range').notNullable().defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('entries');
};
