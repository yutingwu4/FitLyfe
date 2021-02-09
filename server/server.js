const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan')
const Routes = require('./routes/trainerRouter.js')


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files:
// However, the path that you provide to the express.static function is 
// relative to the directory from where you launch your node process. 
// If you run the express app from another directory, it's safer to 
// use the absolute path of the directory that you want to serve:
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/assets', express.static(path.resolve(__dirname, '../assets')))
// Get request for the root directory sends back the index.html.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
})
// app.use('/', express.static(path.resolve(__dirname, '../views')))

//global err handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send("Whoops, global error handler caught you!");
});

//Use the routes defined in routes.js
app.use('/api', Routes);
// Shows us errors that we receive in more detail.
app.use(morgan('tiny'));
// Listen to our server.
app.listen(PORT, function(err) {
  if (err) console.log('Cannot listen', err);
  console.log(`Server listening on port: ${PORT}`);
})