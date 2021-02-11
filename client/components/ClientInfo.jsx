import React from 'react';
import { useForm  } from 'react-hook-form';

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
      <div className="clientInfo__left">
        <img src="#" />
        <p>Trainee Name: {`${firstname} ${lastname}`}</p>
        <p>Email: {`${email}`}</p>
      </div>

      <div className="clientInfo__leftStats">
        <p id="age">Age: </p>
        <p id="gender">Gender: </p>
        <p id="weight">Weight: </p>
        <p id="height">Height: </p>
      </div>

      <div>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            {' '}
            Water Intake:
            <input
              name="waterIntake"
              // type="number"
              ref={register({ required: true })}
            />
            ozs.
          </label>

          <label>
            {' '}
            Daily Macro Goals:
            <input
              name="DMG"
              // type="checkbox"
              ref={register({ required: true })}
            />
          </label>

          <label>
            {' '}
            Calorie Intake:
            <input
              name="calorieIntake"
              // type="number"
              ref={register({ required: true })}
            />
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
export default ClientInfo;
