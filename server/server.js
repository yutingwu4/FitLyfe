const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan')
const TrainerRouter = require('./routes/trainerRouter')

// will help prevent us from needing ".json" and related inconveniences
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files:
// However, the path that you provide to the express.static function is 
// relative to the directory from where you launch your node process. 
// If you run the express app from another directory, it's safer to 
// use the absolute path of the directory that you want to serve:
app.use('/assets', express.static(path.resolve(__dirname, '../assets')))

// Get request for the root directory sends back the index.html.
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
})

//Use the routes defined in routes.js
app.use('/api', TrainerRouter);

// Shows us errors that we receive in more detail.
app.use(morgan('tiny'));
// Listen to our server.
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})