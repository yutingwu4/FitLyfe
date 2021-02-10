import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const whereToPlace = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  whereToPlace
);

// container folder --> main container
// build out w/ mobile first in mind
// create component client box, upon click
// create component for new client
// create component for client page
//
