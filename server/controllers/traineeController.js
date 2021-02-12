const pool = require("../model/TrainerModel");

pool.on("error", (err, client) => {
  console.log("Unexpected error on idle client", err);
  process.exit(-1);
});

const traineeController = {
  async getAllTrainees(req, res, next) {
    const getAllTraineesQuery =
      "SELECT * FROM client_table ORDER BY clientid ASC";

    await pool.query(getAllTraineesQuery, (err, results) => {
      if (err) {
        console.log("GET ALL Trainees Controller Error:", err);
        //next() function needs to be invoked in each conditional code block when using async and await
        next(err);
      } else {
        res.locals.getAllTrainees = results.rows;
        console.log("GET ALL Trainees Controller SUCCESS");
        //next() function needs to be invoked in each conditional code block when using async and await
        next();
      }
    });
  },

  async getOneTrainee(req, res, next) {
    const clientid = req.params.clientid;
    const getOneTraineeQuery = "SELECT * FROM client_table WHERE clientid = $1";
    const getClientIdQuery =
      "SELECT clientid FROM client_table WHERE firstname = $1 AND lastname = $2";

    await pool.query(getOneTraineeQuery, [clientid], (err, results) => {
      if (err) {
        console.log("GET ONE Trainee Controller Error:", err);
        next(err);
      } else {
        res.locals.getOneTrainee = results.rows;
        console.log("GET ONE Trainee Controller SUCCESS");
        next();
      }
    });
  },

  async createTrainee(req, res, next) {
    const {
      contracts,
      firstname,
      lastname,
      email,
      age,
      gender,
      height,
      weight,
    } = req.body;
    let theClientId;
    const createTraineeQuery =
      "INSERT INTO client_table (contracts, firstname, lastname, email) VALUES ($1, $2, $3, $4)";

    const postToBioTable =
      "INSERT INTO biometrics_table (age, gender, weight_lbs, height, clientid) VALUES ($1, $2, $3, $4, $5)";

    await pool.query(
      createTraineeQuery,
      [contracts, firstname, lastname, email],
      (err, results) => {
        if (err) {
          console.log("CREATE Trainee Controller Error:", err);
          next(err);
        } else {
          res.locals.createTrainee = req.body;
          console.log("GET ONE Trainee Controller SUCCESS");
          res.locals.newTrainee = results.row;
        }
      }
    );
  },

  async updateTrainee(req, res, next) {
    const clientid = req.params.clientid;
    const { firstname, lastname } = req.body;
    const updateTraineeQuery =
      "UPDATE client_table SET firstname = $1, lastname = $2 WHERE clientid = $3";

    await pool.query(
      updateTraineeQuery,
      [firstname, lastname, clientid],
      (err, results) => {
        if (err) {
          console.log("UPDATE Trainee Controller Error:", err);
          next(err);
        } else {
          console.log("UPDATE Trainee Controller SUCCESS");
          next();
        }
      }
    );
  },

  async deleteTrainee(req, res, next) {
    const clientid = req.params.clientid;
    const deleteTraineeQuery = "DELETE FROM client_table WHERE clientid = $1";

    await pool.query(deleteTraineeQuery, [clientid], (err, results) => {
      if (err) {
        console.log("DELETE Trainee Controller Error:", err);
        next(err);
      } else {
        console.log("DELETE Trainee Controller SUCCESS");
        next();
      }
    });
  },

  //query for water, calorie, macro intake once one clicks on trainee card
  async createDailyDietIntake(req, res, next) {
    const clientid = req.params.clientid;
    const createDailyDietIntakeQuery =
      "INSERT INTO diet_table (daily_water_intake_ounces, daily_calorie_intake_grams, daily_macros_intake_grams, clientid) VALUES ($1, $2, $3, $4)";

    await pool.query(
      createDailyDietIntakeQuery,
      [
        daily_water_intake_ounces,
        daily_calorie_intake_grams,
        daily_macros_intake_grams,
        clientid,
      ],
      (err, results) => {
        if (err) {
          console.log("CREATE DailyDietIntake Controller Error:", err);
          next(err);
        } else {
          res.locals.createDailyDietIntake = req.body;
          console.log("CREATE DailyDietIntake Controller SUCCESS");
          next();
        }
      }
    );
  },
};

module.exports = traineeController;
