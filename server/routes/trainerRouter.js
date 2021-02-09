const express = require('express')
const router = express.Router()
const TrainerController = require('../../controllers/trainerController.js')


//set up error handling
// get request to /getTrainers and use the trainer controller to set the trainers on the response object
router.get("/getTrainers",  TrainerController.getTrainers, (req, res) => {
  return res.send(res.locals.allTrainers)
})


module.exports = router