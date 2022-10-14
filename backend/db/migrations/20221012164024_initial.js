// const knex = require('knex')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

function addDefaultColumns (table) {
  table.timestamps(false, true)
}

exports.up = async (knex) => {
  // await knex.createTable("user", (table) => {
  //   table.increments().notNullable();
  //   table.uuid('tran_id').notNullable();
  //   table.string('user_name').notNullable();
  //   table.string('full_name').notNullable();
  //   table.string('email', 254).notNullable().unique();
  //   table.string('phone_no').notNullable();
  //   table.string('password', 127).notNullable();
  // });
  // await knex.createTable("roles", (table) => {
  //   table.increments().notNullable();
  //   table.string("key").notNullable();
  //   table.string("role_name").notNullable();
  //   table.string("permission").notNullable();
  // });
  await knex.schema.createTable('permission', (table) => {
    table.increments().notNullable()
    table.string('permisson_name').notNullable()
    table.string('permission_key').notNullable()
    addDefaultColumns(table)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable('permission')
}
