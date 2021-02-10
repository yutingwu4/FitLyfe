import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  ButtonGroup,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';

function ClientForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // try {
    //   await axios.post('/api/createTrainee', data, {
    //     headers: { 'content-type': 'applications/json' },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormLabel>
        {' '}
        First Name:
        <Input name="firstName" ref={register({ required: true })} />
      </FormLabel>
      <FormLabel>
        {' '}
        Last Name:
        <Input name="lastName" ref={register({ required: true })} />
      </FormLabel>
      <FormLabel>
        {' '}
        Gender:
        <Input name="gender" ref={register({ required: true })} />
      </FormLabel>

      <FormLabel>
        Age:
        <Input name="age" ref={register({ required: true })}></Input>
      </FormLabel>

      <FormLabel>
        Current Weight:
        <Input name="currentWeight" ref={register({ required: true })}></Input>
      </FormLabel>

      <FormLabel>
        Goal Weight:
        <Input name="goalWeight" ref={register({ required: true })}></Input>
      </FormLabel>
      {errors.exampleRequired && <span>This field is required</span>}
      <Button type="submit" colorScheme="blue">
        Button
      </Button>
    </form>
  );

  // add back button functionality
}

export default ClientForm;
