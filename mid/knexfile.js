require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    debug: true,
    connection: {
      host     : process.env.DB_HOST,
      user     : 'labber',
      password : 'labber',
      database : 'midterm',
      port     : '5432',
      ssl      : process.env.DB_SSL
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    // connection: process.env.DATABASE_URL + '?ssl=true',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};