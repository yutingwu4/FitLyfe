const express = require('express')
const path = require('path');
const router = express.Router()
const { 
    getAllTrainees, 
    getOneTrainee, 
    createTrainee, 
    updateTrainee, 
    deleteTrainee 
} = require('../controllers/traineeController');

//get all trainee
router.get('/allTrainees', getAllTrainees, (req, res) => {
  res.status(200).json(res.locals.getAllTrainees)
});

//get a trainee
router.get('/oneTrainee', getOneTrainee, (req, res) => {
  res.status(200).json(res.locals.getOneTrainee)
});

//add a trainee
router.post('/newTrainee', createTrainee, (req, res) => {
  res.status(201).send(`Trainee created with ID: ${result.insertId}`)
});

//update trainee info
router.put('/updateTrainee', updateTrainee, (req, res) => {
  res.status(200).send(`Trainee modified with ID: ${id}`)
});

//delete a trainee
router.delete('/removeTrainee', deleteTrainee, (req, res) => {
  res.status(200).send(`Trainee deleted with ID: ${id}`)
});


module.exports = router;