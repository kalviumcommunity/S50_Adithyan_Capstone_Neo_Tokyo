import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginpg() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUserData(response.data);
      } catch (error) {
        console.log("Error while fetching user data", error);
      }
    }
    fetchData();
  }, []);
  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const userData = response.data;
  
      const user = userData.find(
        (user) => user.email === data.email && user.password === data.password 
      );
  
      if (user) {
        console.log("Login successful!");
        navigate('/');
      } else {
        console.log("Invalid email or password");
        setLoginError(true);
      }
    } catch (error) {
      console.log("Error while fetching user data", error);
      setLoginError(true);
    }
  };
  
  return (
    <div>
      <div className='picture1 '>
        <h2 className='logo text-white glitch1 ml-56 mt-64' data-text='Neo Tokyo'>Neo Tokyo</h2>
      </div>
      <div className='welcome'>Welcome back!</div>
      <div className='form1'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group pr-50  p-2 '>
            <label htmlFor='email'></label>
            <input className='bg-zinc-300 h-12  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg 'placeholder='Email' type='email' id='email' {...register('email', { required: true })} /><br/>
            {errors.email && <span className='ml-6'>Email is required</span>}
          </div>

          <div className='form-group pr-50  p-2'>
            <label htmlFor='password'></label>
            <input className='bg-zinc-300 h-12  border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg'placeholder='Password' type='password' id='password' {...register('password', { required: true })} /><br/>
            {errors.password && <span className='ml-6'>Password is required</span>}
          </div>

          {loginError && <p className=" error text-red-500">Invalid email or password</p>}
          <button type='submit' className='bg-red-600 w-64 h-10 rounded-lg text-white submit'>Login</button>
        </form>
      </div>
      <p className='DHAA'>Don't have an Account?<Link className='underline' to="/signup">Sign up</Link></p>
    </div>    
  );
}

export default Loginpg;
