'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('lessons', (table) => {
    table.increments();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.string('title').notNullable().defaultTo('');
    table.string('category');
    table.string('concept');
    table.text('description').notNullable().defaultTo('');
    table.boolean('published').notNullable();
    table.text('body').notNullable().defaultTo('');
    table.integer('likes');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lessons');
};
