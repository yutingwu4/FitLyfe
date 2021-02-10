import React from 'react';
import { Box } from '@chakra-ui/react';
import { Switch, Route, Link } from 'react-router-dom';
import ClientInfo from './ClientInfo';

function ClientCard() {
  return (
    <Switch>
      <Route exact path="/">
        <div>
          <Link to="/clientid">
            <button className="btn">Click this button</button>
          </Link>
          <Box
            border="1px solid white"
            borderRadius="4px"
            bg="tomato"
            w="100%"
            p={2}
            color="white"
          >
            <p> Wanda </p>
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
