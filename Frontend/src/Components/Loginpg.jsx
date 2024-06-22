import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Loginpg() {
  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState(false);

  
  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );

      const userDataString = JSON.stringify(response.data.user);
      Cookies.set("userData", userDataString);
      
      console.log("Login successful!");
      navigate("/Landing");
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError(true);
    }
  };
  const handleClick = () => {
    window.location = "http://localhost:3000/auth/google";
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        <div className="text-center text-4xl mt-56">Welcome!</div>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid mt-10 justify-center w-fit"
          >
            <div className="form-group pr-50 p-2">
              <label htmlFor="email"></label>
              <input
                className="bg-zinc-300 h-12 border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg"
                placeholder="Email"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="ml-6">Email is required</span>}
            </div>

            <div className="form-group pr-50 p-2">
              <label htmlFor="password"></label>
              <input
                className="bg-zinc-300 h-12 border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg"
                placeholder="Password"
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="ml-6">Password is required</span>
              )}
            </div>

            {loginError && (
              <p className="error text-red-500">Invalid email or password</p>
            )}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-red-500 w-2/4  h-10 rounded-lg text-white hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center mt-10">
              <hr className="w-1/4 border-t-2 border-gray-400" />
              <p className="mx-4">or</p>
              <hr className="w-1/4 border-t-2 border-gray-400" />
            </div>
            <div className="flex justify-center mt-10 w-full">
              <button className=" bg-red-900" onClick={handleClick}>
                <img
                  className="w-10 h-10"
                  src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                  alt=""
                />
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
      <div>
        <div className="picture1">
          <h2
            className="logo text-white glitch1 ml-56 mt-64"
            data-text="Neo Tokyo">
            Neo Tokyo
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Loginpg;
