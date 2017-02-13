'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('entries', (table) => {
    table.increments();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.text('body').notNullable().defaultTo('');
    table.decimal('anger', 5, 3).notNullable();
    table.decimal('disgust', 5, 3).notNullable();
    table.decimal('fear', 5, 3).notNullable();
    table.decimal('joy', 5, 3).notNullable();
    table.decimal('sadness', 5, 3).notNullable();
    table.decimal('openness', 5, 3).notNullable();
    table.decimal('conscientiousness', 5, 3).notNullable();
    table.decimal('extraversion', 5, 3).notNullable();
    table.decimal('agreeableness', 5, 3).notNullable();
    table.decimal('emotional_range', 5, 3).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('entries');
};
