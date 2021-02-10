const { Pool } = require('pg');
const config = require('../../config.js')

const PG_URI = config.URI;

// declare a variable for the new pool connection string
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = pool;