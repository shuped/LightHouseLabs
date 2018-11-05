const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const DataHelpersFunction = require('./lib/data-helpers.js');
const tweetsRoutesFunction = require('./routes/tweets');

const app = express();

const MONGO_URI = 'mongodb://localhost:27017/tweeter';
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

MongoClient.connect(MONGO_URI, (err, db) => {
  if (err) {
    console.log(`Failed to connect: ${MONGO_URI}`);
    throw err;
  }
  // Because it exports a function that expects the `db` as a parameter, we can
  // require it and pass the `db` parameter immediately:
  const DataHelpers = DataHelpersFunction(db);

  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = tweetsRoutesFunction(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use('/tweets', tweetsRoutes);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
