import React from 'react';
import { useForm } from 'react-hook-form';

function ClientInfo() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="clientInfo__left">
        {/* Client Photo */}
        {/* For the time-being we would just store dummy data image. */}
        <img src="#" />
        {/* Name of Client */}
        <p id="name">Wanda</p>
        <p id="age">Age: </p>
      </div>

      <div className="clientInfo__leftStats">
        {/* Gender */}
        <p id="clientGender">Gender: </p>
        {/* Current Weight */}
        <p id="currentWeight">Current Weight: </p>
        {/* Goal Weight */}
        <p id="goalWeight">Goal Weight: </p>
        {/* Macro Goals */}
        <p id="macroGoal">Macro Goal: </p>
        {/* Nutrional Goals/Calorie */}
        <p id="nutritionalGoal">Nutritional Goals: </p>
      </div>
      <div>
        {/* Client Info FORM */}
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            {' '}
            Water Intake:
            <input
              name="waterIntake"
              type="number"
              ref={register({ required: true })}
            />
            ozs.
          </label>

          <label>
            {' '}
            Daily Macro Goals:
            <input
              name="DMG"
              type="checkbox"
              ref={register({ required: true })}
            />
          </label>

          <label>
            {' '}
            Calorie Intake:
            <input
              name="calorieIntake"
              type="number"
              ref={register({ required: true })}
            />
          </label>

          <input type="submit" />
        </form>
      </div>
      {/* Water Intake oz*/}
      {/* Daily Marco Goals checkbox if hit*/}
      {/* Calorie Intake  */}
      {/* SAVE */}
    </div>

    // add back button functionality
  );
}
export default ClientInfo;
