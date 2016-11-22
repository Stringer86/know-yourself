'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('wish_list', (table) => {
    table.increments();
    table.string('question').notNullable().defaultTo('');
    table.string('category').notNullable().defaultTo('');

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lessons');
};
