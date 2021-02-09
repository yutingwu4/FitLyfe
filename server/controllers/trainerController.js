const pool = require('../models/TrainerModel')

// create controller for trainer database tasks
const TrainerController = {
  // async function to database to place rows on the response object
  async getTrainers(req, res, next) {
    console.log('in controller')
    const results = await pool.query("SELECT * FROM players")
    res.locals.allTrainers = results.rows
    return next()
  }
}

module.exports = TrainerController