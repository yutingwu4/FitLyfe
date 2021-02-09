const express = require('express')
const router = express.Router()
const trainerController = require('../controllers/trainerController.js')

const { Pool } = require('pg');

const PG_URI = 'postgres://dfqpfaet:GigyWQsljfTAXNLHbXTY62dWSgN2jTRm@ziggy.db.elephantsql.com:5432/dfqpfaet'

const pool = new Pool({
  connectionString: PG_URI,
});


router.get("/players",  async (req, res) => {
  const results = await pool.query("SELECT * FROM players")
  console.table(results.rows)
})

module.exports = router