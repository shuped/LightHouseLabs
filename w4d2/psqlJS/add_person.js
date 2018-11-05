const settings = require('./settings.json')

const knex = require('knex')({
  client: 'pg',
  connection: settings
});

let [ first_name, last_name, birthdate ]= process.argv.slice(2,5);

knex('famous_people')
  .insert({first_name, last_name, birthdate})
  .finally(() => knex.destroy())