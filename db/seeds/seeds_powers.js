const Poderes = require('../dados/poderes.js');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.seed = async function (knex) {
  for (const key in Poderes) {
    const { name, description, type, requirements } = Poderes[key];

    await knex('poderes').insert({
      name,
      description,
      type,
      requirements: JSON.stringify(requirements),
    });
  }
};