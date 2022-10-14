require('dotenv').config()
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    // connection: 'postgres://admin:admin@localhost:5432/qotari',
    connection: {
      database: process.env.POSTGRES_DB || 'qotari',
      user: process.env.POSTGRES_USER || 'admin',
      password: process.env.POSTGRES_PASSWORD || 'admin'
    },
    migrations: {
      directory: './db/migrations'
    }
  }
}

// const knex = require('knex')

// const db = knex({
//   client: 'pg',
//   connection: {
//     host: 'localhost',
//     user: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DB
//   }
// })
