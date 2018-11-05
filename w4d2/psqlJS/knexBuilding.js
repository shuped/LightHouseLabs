const settings = require('./settings.json')
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

let [ query ] = process.argv.slice(2,3);

knex.select()
  .from('famous_people')
  .where('first_name', 'ilike', query)
  .then(rows => {
    console.log(`Found ${rows.length} person(s) with names similar to '${query}'`)
    rows.forEach((match, index) => {
      console.log(`- ${index + 1}: ${match.first_name} ${match.last_name}, born ${match.birthdate.toDateString()}`);
    })
  }).finally(() => {
    knex.destroy();
  })