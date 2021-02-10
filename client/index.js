import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// container folder --> main container
// build out w/ mobile first in mind
// create component client box, upon click
// create component for new client
// create component for client page
//
