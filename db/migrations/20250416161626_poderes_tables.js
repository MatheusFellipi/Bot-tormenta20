/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('poderes', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description').nullable();
      table.string('type').notNullable();
      table.text('requirements').nullable();
      table.timestamps(true, true); 
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('items');
  };