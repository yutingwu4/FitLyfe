const { Pool } = require('pg');
// const config = require('../../config.js')

const PG_URI = 'postgres://dfqpfaet:GigyWQsljfTAXNLHbXTY62dWSgN2jTRm@ziggy.db.elephantsql.com:5432/dfqpfaet'

// declare a variable for the new pool connection string
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = pool