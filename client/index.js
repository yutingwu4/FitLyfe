import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalProvider } from '../contexts/globalContext';

ReactDOM.render(
  <GlobalProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </GlobalProvider>,
  document.getElementById('root')
);
