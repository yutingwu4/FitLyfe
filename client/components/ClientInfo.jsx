import React from 'react';
import { useForm } from 'react-hook-form';
import ClientCard from './ClientCard';
import {
  Button,
  ButtonGroup,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';

function ClientInfo({ clientid, firstname, lastname, email }) {
  const { register, handleSubmit, watch, errors } = useForm();

  const fetchData = () => {
    fetch(`/api/clientInfo/${clientid}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
      })
      .catch((err) => console.log(err));
  };

  // onSubmit handler to submit additional trainee metrics to DB.
  const onSubmit = (data) => {
    fetch(`/api/creatediet/${clientid}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="clientInfo"
      >
        <p className="clientInfo__metrics clientName">{`${firstname} ${lastname}`}</p>
        <p className="clientInfo__metrics">{`${email}`}</p>
        <div className="clientInfo__divider"></div>
        <p className="clientInfo__metrics" id="age">
          Age{' '}
        </p>
        <p className="clientInfo__metrics" id="gender">
          Gender{' '}
        </p>
        <p className="clientInfo__metrics" id="weight">
          Weight{' '}
        </p>
        <p className="clientInfo__metrics" id="height">
          Height{' '}
        </p>
        <div className="clientInfo__divider"></div>
      </div>
      <div>
        <form
          className="clientForm"
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormLabel className="clientForm__label">
            {' '}
            Water Intake (oz.)
            <Input
              name="waterIntake"
              // type="number"
              ref={register({ required: true })}
            />
          </FormLabel>

          <FormLabel>
            {' '}
            Daily Macro Goals
            <Input
              name="DMG"
              // type="checkbox"
              ref={register({ required: true })}
            />
          </FormLabel>

          <FormLabel>
            {' '}
            Calorie Intake
            <Input
              name="calorieIntake"
              // type="number"
              ref={register({ required: true })}
            />
          </FormLabel>

          <Button className="clientForm__btn" type="submit">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
export default ClientInfo;
