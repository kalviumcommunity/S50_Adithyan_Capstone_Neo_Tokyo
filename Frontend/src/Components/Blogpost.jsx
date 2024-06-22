import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imgDB } from "./Firebase/firebase";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import bg from "../assets/bg.png";

function Blogpost() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [imageLink, setImageLink] = useState(""); // State to store image URL

  const onSubmit = async (data) => {
    try {
      if (!data.imageLink[0]) {
        setError("Please upload an image.");
        return;
      }

      // Firebase Storage reference
      const storageRef = ref(imgDB, `Imgs/${uuidv4()}`); // Using imgDB for storage

      // Upload image to Firebase Storage
      const uploadTask = await uploadBytes(storageRef, data.imageLink[0]);
      const imageUrl = await getDownloadURL(uploadTask.ref);



      // Set image link state
      setImageLink(imageUrl);

      // Post data to your API
      const response = await axios.post("http://localhost:3000/blog", {
        title: data.title,
        description: data.description,
        image_link: imageUrl,
      });



      console.log("Post created:");
      reset(); // Reset form fields
      setError(""); // Clear any previous errors
      setSuccessMessage("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Error creating post. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <nav className="w-screen bg-black opacity-50 h-[10vh]">
        <Link to="/Landing">
          <h1 className="text-gray-500 font-bold hover:text-white transition duration-300 text-4xl pl-20 pt-4">
            Home
          </h1>
        </Link>
      </nav>
      <div className="w-screen h-[90vh] flex flex-col justify-center items-center p-8">
        <center>
          <h1 className="text-3xl text-white font-bold mb-16">Create Post</h1>
        </center>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-red-300 bg-opacity-10 shadow-lg w-[70vh] backdrop-blur-lg border border-white border-opacity-20 rounded-lg p-10">
          <label htmlFor="title" className="text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="w-full h-10 border border-gray-300 rounded-md px-4 mb-4"
          />
          <label htmlFor="description" className="text-white">
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="w-full h-40 border border-gray-300 rounded-md px-4 resize-none mb-4"
          />
          <label htmlFor="imageLink" className="text-white">
            Image Link
          </label>
          <input
            type="file"
            id="imageLink"
            {...register("imageLink")}
            className="w-full h-10 border border-gray-300 rounded-md px-4 mb-4"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
          {imageLink && <p className="text-blue-500 mt-2">Image URL: {imageLink}</p>}
        </form>
      </div>
    </div>
  );
}

export default Blogpost;
