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
    table.text('description').notNullable().defaultTo('');
    table.boolean('published').notNullable();
    table.text('body').notNullable().defaultTo('');
    table.text('html').defaultTo('');
    table.text('css').defaultTo('');
    table.text('js').defaultTo('');
    table.integer('likes').defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lessons');
};
