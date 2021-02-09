import React from 'react';
import { useForm } from 'react-hook-form';

function ClientForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        {' '}
        Full Name:
        <input name="name" ref={register({ required: true })} />
      </label>
      <label>
        {' '}
        Gender:
        <input name="gender" ref={register({ required: true })} />
      </label>

      <label>
        {' '}
        Age:
        <input type="number" name="age" ref={register({ required: true })} />
      </label>

      <label>
        {' '}
        Current Weight:
        <input
          type="number"
          name="currentWeight"
          ref={register({ required: true })}
        />
      </label>

      <label>
        {' '}
        Goal Weight:
        <input
          type="number"
          name="goalWeight"
          ref={register({ required: true })}
        />
      </label>

      <label style={{ display: 'flex' }}>
        {' '}
        Daily Activity Level:
        <label for="1">1</label>
        <input type="radio" id="1" name="activity" value="1" />
        <label for="2">2</label>
        <input type="radio" id="2" name="activity" value="2" />
        <label for="3">3</label>
        <input type="radio" id="3" name="activity" value="3" />
        <label for="4">4</label>
        <input type="radio" id="4" name="activity" value="4" />
        <label for="5">5</label>
        <input type="radio" id="5" name="activity" value="5" />
      </label>
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );

  // add back button functionality
}

export default ClientForm;
