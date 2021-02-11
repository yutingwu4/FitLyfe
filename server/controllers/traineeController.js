<<<<<<< HEAD
const pool = require('../model/TrainerModel')
=======
const pool = require('../models/TrainerModel');
>>>>>>> d93c91a35e87f5d30a6e1867e0bb97022713c5e7

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

const traineeController = {
  async getAllTrainees(req, res, next) {
<<<<<<< HEAD

    const getAllTraineesQuery = 'SELECT * FROM client_table ORDER BY clientid ASC';

    await pool.query(getAllTraineesQuery, (err, results) => {
      if(err){
        console.log('GET ALL Trainees Controller Error:', err)
        //next() function needs to be invoked in each conditional code block when using async and await
        next(err);
      } else {
        res.locals.getAllTrainees = results.rows;
        console.log('GET ALL Trainees Controller SUCCESS')
        //next() function needs to be invoked in each conditional code block when using async and await
        next();
      }
    });

  },

  async getOneTrainee(req, res, next) {
    const clientid =  req.params.clientid;
    const getOneTraineeQuery = 'SELECT * FROM client_table WHERE clientid = $1';

    await pool.query(getOneTraineeQuery, [clientid], (err, results) => {
      if(err) {
        console.log('GET ONE Trainee Controller Error:', err);
        next(err);
      } else {
        res.locals.getOneTrainee = results.rows;
        console.log('GET ONE Trainee Controller SUCCESS')
        next();
      }
    });

=======
    await pool.query(
      'SELECT * FROM client_table ORDER BY clientid ASC',
      (err, results) => {
        // console.log(results.rows)
        if (err) {
          console.log(
            'GET ALL Trainees Controller Error:' + JSON.stringify(err)
          );
          return next();
        } else {
          res.locals.getAllTrainees = results.rows;
          console.log(
            'GET ALL Trainees Controller SUCCESS' +
              ' the result ' +
              JSON.stringify(results.rows)
          );
          return next();
        }
      }
    );
  },

  async getOneTrainee(req, res, next) {
    const clientid = req.params.clientid;

    await pool.query(
      'SELECT * FROM client_table WHERE clientid = $1',
      clientid,
      (err, results) => {
        if (err) {
          console.log(
            'GET ONE Trainee Controller Error:' + JSON.stringify(err)
          );
        } else {
          res.locals.getOneTrainee = results.rows;
          // console.log(res.locals.getOneTrainee)
          console.log('GET ONE Trainee Controller SUCCESS');
        }
      }
    );
    return next();
>>>>>>> d93c91a35e87f5d30a6e1867e0bb97022713c5e7
  },

  async createTrainee(req, res, next) {

    const { contracts, firstname, lastname, email } = req.body;
<<<<<<< HEAD
    const createTraineeQuery = 'INSERT INTO client_table (contracts, firstname, lastname, email) VALUES ($1, $2, $3, $4)';

    await pool.query(createTraineeQuery, [contracts, firstname, lastname, email], (err, results) => {   
      if(err) {
        console.log('CREATE Trainee Controller Error:', err);
        next(err);
      } else {
        res.locals.createTrainee = req.body;
        console.log('GET ONE Trainee Controller SUCCESS');
        next();
      }
    });

=======
    await pool.query(
      'INSERT INTO client_table (contracts, firstname, lastname, email) VALUES ($1, $2, $3, $4)',
      [contracts, firstname, lastname, email],
      (err, results) => {
        if (err) {
          console.log('CREATE Trainee Controller Error:' + JSON.stringify(err));
        } else {
          res.locals.createTrainee = req.body;
          console.log('res.locals', res.locals.createTrainee.firstname);
        }
      }
    );
    return next();
>>>>>>> d93c91a35e87f5d30a6e1867e0bb97022713c5e7
  },

  async updateTrainee(req, res, next) {

    const clientid = req.params.clientid;
    const { firstname, lastname } = req.body;
<<<<<<< HEAD
    const updateTraineeQuery = 'UPDATE client_table SET firstname = $1, lastname = $2 WHERE clientid = $3';
 
    await pool.query(updateTraineeQuery, [firstname, lastname, clientid], (err, results) => {
      if (err) {
        console.log('UPDATE Trainee Controller Error:', err);
        next(err);
      } else {
        console.log('UPDATE Trainee Controller SUCCESS');
        next();
      }
    });

=======

    await pool.query(
      'UPDATE client_table SET firstname = $1, lastname = $2 WHERE clientid = $3',
      [firstname, lastname, clientid],
      (err, results) => {
        if (err) {
          console.log('UPDATE Trainee Controller Error:' + JSON.stringify(err));
        } else {
          console.log('UPDATE Trainee Controller SUCCESS');
        }
      }
    );
    return next();
>>>>>>> d93c91a35e87f5d30a6e1867e0bb97022713c5e7
  },

  async deleteTrainee(req, res, next) {

    const clientid = req.params.clientid;
<<<<<<< HEAD
    const deleteTraineeQuery = 'DELETE FROM client_table WHERE clientid = $1'

    await pool.query( deleteTraineeQuery, [clientid], (err, results) => {
      if (err) {
        console.log('DELETE Trainee Controller Error:', err);
        next(err);
      } else {
        console.log('DELETE Trainee Controller SUCCESS');
        next();
      }
    });

=======
    await pool.query(
      'DELETE FROM client_table WHERE clientid = $1',
      [clientid],
      (err, results) => {
        if (err) {
          console.log('DELETE Trainee Controller Error:' + JSON.stringify(err));
        } else {
          console.log('DELETE Trainee Controller SUCCESS');
        }
      }
    );
    return next();
>>>>>>> d93c91a35e87f5d30a6e1867e0bb97022713c5e7
  },

};

<<<<<<< HEAD

module.exports = traineeController;
=======
module.exports = traineeController;
>>>>>>> d93c91a35e87f5d30a6e1867e0bb97022713c5e7
