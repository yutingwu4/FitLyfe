import React from 'react';
import { Box } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import ClientInfo from './ClientInfo';

function ClientCard({ firstname, lastname, email }) {
  return (
    <Switch>
      <Route exact path="/">
        <div>
          <Box
            border="1px solid grey"
            borderRadius="4px"
            bg="white"
            h="20rem"
            w="15rem"
            p={2}
            color="black"
          >
            <p>{`${firstname} ${lastname}`}</p>
            <p>{email}</p>
          </Box>
        </div>
      </Route>
      <Route path="/clientid">
        <ClientInfo />
      </Route>
    </Switch>
  );
}

export default ClientCard;
