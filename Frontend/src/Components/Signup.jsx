import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <div className='picture flex justify-between'>
      </div>
      {/* <div>Hi there</div> */}
      <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group pr-50  p-2 '>
            <label htmlFor='username'></label>
            <input className='bg-zinc-300  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg 'placeholder='Username' type='text' id='username' {...register('username', { required: true })} />
            {errors.username && <span>This field is required</span>}
          </div>

          <div className='form-group pr-50  p-2'>
            <label htmlFor='email'></label>
            <input className='bg-zinc-300  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg'placeholder='Email' type='email' id='email' {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}
          </div>

          <div className='form-group pr-50  p-2'>
            <label htmlFor='password'></label>
            <input className='bg-zinc-300  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg'placeholder='Password' type='password' id='password' {...register('password', { required: true })} />
            {errors.password && <span>This field is required</span>}
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
