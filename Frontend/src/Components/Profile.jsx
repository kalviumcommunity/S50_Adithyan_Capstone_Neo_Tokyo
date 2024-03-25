import React from "react";
import { useForm } from "react-hook-form";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

function Profile() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="overflow-hidden">
      <div
        className=" border border-black h-72 w-screen bg-no-repeat bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
        }}
      >
        <Link to="/About">
          <h3 className="text-white text-3xl text-right ml-[800px] pr-20">
            About
          </h3>
        </Link>
        <Link to="/Landing">
          <h3 className="text-white text-3xl text-right ">Home</h3>
        </Link>
      </div>
      <div className="bg-white post text-3xl">
        <h1 className="w">My posts</h1>

        <div className="absolute z-10 right-40 dummy  blog grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4  mx-auto items-center justify-center">
          <div className="bg-red-950 p-5 rounded-lg w-96">
            <div className="w-full h-60 bg-blue-800">
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-white">LOREM</h2>
            <p className="text-xl line-clamp-3 text-white">
              Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid
              enim voluptates corporis quia odio quod suscipit magni offrem. In,
              facilis. Nesciunt.
            </p>
          </div>

          <div className="bg-red-950 p-5 rounded-lg w-96">
            <div className="w-full h-60 bg-blue-800">
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-white">LOREM</h2>
            <p className="text-xl line-clamp-3 text-white">
              Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid
              enim voluptates corporis quia odio quod suscipit magni offrem. In,
              facilis. Nesciunt.
            </p>
          </div>

          <div className="bg-red-950 p-5 rounded-lg w-96">
            <div className="w-full h-60 bg-blue-800">
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-white">LOREM</h2>
            <p className="text-xl line-clamp-3 text-white">
              Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid
              enim voluptates corporis quia odio quod suscipit magni offrem. In,
              facilis. Nesciunt.
            </p>
          </div>

          <div className="bg-red-950 p-5 rounded-lg w-96">
            <div className="w-full h-60 bg-blue-800">
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-white">LOREM</h2>
            <p className="text-xl line-clamp-3 text-white">
              Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid
              enim voluptates corporis quia odio quod suscipit magni offrem. In,
              facilis. Nesciunt.
            </p>
          </div>

          <div className="bg-red-950 p-5 rounded-lg w-96">
            <div className="w-full h-60 bg-blue-800">
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-white">LOREM</h2>
            <p className="text-xl line-clamp-3 text-white">
              Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid
              enim voluptates corporis quia odio quod suscipit magni offrem. In,
              facilis. Nesciunt.
            </p>
          </div>

          <div className="bg-red-950 p-5 rounded-lg w-96">
            <div className="w-full h-60 bg-blue-800">
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-white">LOREM</h2>
            <p className="text-xl line-clamp-3 text-white">
              Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid
              enim voluptates corporis quia odio quod suscipit magni offrem. In,
              facilis. Nesciunt.
            </p>
          </div>
        </div>
      </div>

      <div className="mr-40 bg-cover rounded-full h-40 w-40 border border-black profile bg-gray-500"></div>
      <form
        className="ml-16 form2 shadow-xl  p-8 rounded-lg w-72"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          ></label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bio"
          ></label>
          <textarea
            {...register("bio")}
            id="bio"
            placeholder="Bio"
            className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          ></label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className=" ml-16 bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
