import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        formData
      );
      const userDataString = JSON.stringify(response.data.newUser);
      Cookies.set("userData", userDataString);
     

      navigate("/Landing");
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.status === 400) {
        const { details } = error.response.data;
        const message = details.map((detail) => detail.message).join(", ");
        setErrorMessage(message);
      }
    }
  };

  const handleClick = () => {
    window.location = "http://localhost:3000/auth/google";
  };

  return (
    <div className="flex">
      <div className="picture">
        <h2
          className="logo text-white glitch1 ml-56 mt-64"
          data-text="Neo Tokyo"
        >
          Neo Tokyo
        </h2>
      </div>
      <div className="flex w-2/4 flex-col items-center">
        <div className="text-4xl mt-44">Hi there!</div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="grid justify-center">
            <div className="form-group pr-5 p-2">
              <label htmlFor="username"></label>
              <input
                className="bg-zinc-300 h-12 border-black border w-64 ml-3 pl-2 py-2 pr-4 rounded-lg"
                placeholder="Username"
                type="text"
                id="username"
                {...register("username", { required: true })}
              />
              <br />
              {errors.username && (
                <span className="ml-6">Username is required</span>
              )}
            </div>

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
              {errors.email && (
                <span className="ml-6">Email is required</span>
              )}
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

            <button className="border border-black bg-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition duration-300 ease-in-out mx-6 mt-4 h-10 rounded-lg text-white">
              Submit
            </button>

            <div className="flex justify-center items-center mt-10">
              <hr className="w-1/4 border-t-2 border-gray-400" />
              <p className="mx-4">or</p>
              <hr className="w-1/4 border-t-2 border-gray-400" />
            </div>

            <div className="flex justify-center mt-10 w-full">
              <button className="bg-red-900" onClick={handleClick}>
                <img
                  className="w-10 h-10"
                  src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                  alt=""
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
