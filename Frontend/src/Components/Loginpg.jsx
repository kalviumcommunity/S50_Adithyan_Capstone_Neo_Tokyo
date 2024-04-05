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
    console.log("email", formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );
      Cookies.set("username", response.data.username);
      console.log("Login successful!");
      navigate("/Landing");
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError(true);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        <div className="text-center text-4xl mt-56">Welcome!</div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="grid mt-10 justify-center w-fit">
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
              className="bg-red-600 w-2/4  h-10 rounded-lg text-white"
            >
              Login
            </button>

            </div>
            <div>
              
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="picture1">
          <h2
            className="logo text-white glitch1 ml-56 mt-64"
            data-text="Neo Tokyo"
          >
            Neo Tokyo
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Loginpg;
