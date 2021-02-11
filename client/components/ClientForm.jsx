import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  ButtonGroup,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

function ClientForm() {
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    fetch('/api/newTrainee', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    history.goBack();
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormLabel>
        {' '}
        First Name:
        <Input name="firstname" ref={register({ required: true })} />
      </FormLabel>
      <FormLabel>
        {' '}
        Last Name:
        <Input name="lastname" ref={register({ required: true })} />
      </FormLabel>
      <FormLabel>
        {' '}
        Email:
        <Input name="email" ref={register({ required: true })} />
      </FormLabel>

      <FormLabel>
        Contracts:
        <Input name="contracts" ref={register({ required: true })}></Input>
      </FormLabel>

      {/* <FormLabel>
        Current Weight:
        <Input name="currentWeight" ref={register({ required: true })}></Input>
      </FormLabel>

      <FormLabel>
        Goal Weight:
        <Input name="goalWeight" ref={register({ required: true })}></Input> */}
      {/* </FormLabel> */}
      {errors.exampleRequired && <span>This field is required</span>}
      <Button type="submit" colorScheme="blue">
        Button
      </Button>
    </form>
  );

  // add back button functionality
}

export default ClientForm;
