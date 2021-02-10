const pool = require('../server/models/TrainerModel')

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// create controller for trainer database tasks
const TrainerController = {
  // async function to database to place rows on the response object
  async getTrainers(req, res, next) {
    const results = await pool.query("SELECT * FROM players");
    res.locals.allTrainers = results.rows;
    return next();
  }

  

}




module.exports = TrainerController
