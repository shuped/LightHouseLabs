const myClient = require('./client.js');

myClient.connect((err) => {
  if (err) {
    return console.error('Connection Error', err);
  }
  const cliArgs = process.argv.slice(2)
  const query = cliArgs[0]
  const queryString = cliArgs[1] || 'SELECT * FROM famous_people WHERE first_name ILIKE $1;'

  console.log('Searching...')
  myClient.query(queryString, [query], (err, result) => {
    if (err) {
      myClient.end()
      return console.error('error running query', err);
    }

    console.log(`Found ${result.rowCount} person(s) with names similar to '${query}'`)
    result.rows.forEach((match, index) => {
      console.log(`- ${index}: ${match.first_name} ${match.last_name}, born ${match.birthdate.toDateString()}`);
    })

    myClient.end();
  });
});