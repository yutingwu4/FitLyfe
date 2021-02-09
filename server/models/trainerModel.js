const { Pool } = require('pg');
// need to verify link to config.js
const config = require("../../config");
// const PG_URI = config.URI;
const PG_URI = 'postgres://dfqpfaet:GigyWQsljfTAXNLHbXTY62dWSgN2jTRm@ziggy.db.elephantsql.com:5432/dfqpfaet'
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});


pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

pool.connect((err, client, release) => {
  console.log("Connected to DB")
  if (err) {
    return console.log('error acquiring client');
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});

/* 
example to get date and time

const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool()
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

*/

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/images/schema.png?raw=true
// pool.query('', (err, res) => {
//   if (err) throw err;
//   console.log('test');
// });

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

