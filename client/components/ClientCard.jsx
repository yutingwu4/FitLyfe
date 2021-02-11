import React from 'react';
import { Box } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import ClientInfo from './ClientInfo';

function ClientCard({ firstname, lastname, email, clientid }) {
  return (
    <Switch>
      <Route exact path="/">
          <Box
            className="clientCard" 
          >
            <p>{`${firstname} ${lastname}`}</p>
          </Box>
      </Route>
      <Route path="/clientid">
        <ClientInfo />
      </Route>
    </Switch>
  );
}

export default ClientCard;
