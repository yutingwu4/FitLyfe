import React from 'react';
import { Box } from '@chakra-ui/react';

function ClientCard() {
  return (
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
  );
}

export default ClientCard;
