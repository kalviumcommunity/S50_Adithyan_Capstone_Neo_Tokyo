import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; 

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/users', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response && error.response.status === 400) {
        const { details } = error.response.data;
        const message = details.map(detail => detail.message).join(', ');
        setErrorMessage(message);
      }
    }
  };

  return (
    <div>
      <div className='picture'>
        <h2 className='logo text-white glitch1 ml-56 mt-64' data-text='Neo Tokyo'>Neo Tokyo</h2>
      </div>
      <div className='hi'>Hi there!</div>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group pr-50  p-2 '>
            <label htmlFor='username'></label>
            <input
              className='bg-zinc-300 h-12  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg'
              placeholder='Username'
              type='text'
              id='username'
              {...register('username', { required: true })}
            /><br/>
            {errors.username && <span className='ml-6'>{errors.username.message}</span>}
          </div>

          <div className='form-group pr-50  p-2'>
            <label htmlFor='email'></label>
            <input
              className='bg-zinc-300 h-12  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg'
              placeholder='Email'
              type='email'
              id='email'
              {...register('email', { required: true })}
            /><br/>
            {errors.email && <span className='ml-6'>{errors.email.message}</span>}
          </div>

          <div className='form-group pr-50  p-2'>
            <label htmlFor='password'></label>
            <input
              className='bg-zinc-300 h-12  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg'
              placeholder='Password'
              type='password'
              id='password'
              {...register('password', { required: true })}
            /><br/>
            {errors.password && <span className='ml-6'>{errors.password.message}</span>}
          </div>

          <button type='submit' className='bg-red-600 w-64 h-10 rounded-lg text-white submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
