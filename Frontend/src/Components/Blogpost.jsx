import React, { useState } from 'react';
import bg from '../assets/bg.png';
import axios from 'axios';
import { Link } from "react-router-dom";


function Blogpost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [error, setError] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/blog', {
        title,
        description,
        image_link: imageLink 
      });
      console.log('Post created:', response.data);
      setTitle('');
      setDescription('');
      setImageLink('');
      setError('');
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Error creating post. Please try again.'); 
    }
  };

  return (
    <div className="h-screen w-screen bg-no-repeat bg-cover " style={{backgroundImage: `url(${bg})`}}>
      <nav className="w-screen bg-black opacity-50 h-[10vh]">
        <Link to='/Landing'>
          <h1 className='text-gray-500 font-bold hover:text-white transition duration-300 text-4xl pl-20 pt-4'>Home</h1>
        </Link> 
      </nav>     
      <div className="w-screen h-[90vh] flex flex-col justify-center items-center p-8 ">
        <center><h1 className="text-3xl text-white font-bold mb-16">Create Post</h1></center>
        <form onSubmit={handleSubmit} className='bg-red-300 bg-opacity-10 shadow-lg w-[70vh] backdrop-blur-lg border border-white border-opacity-20 rounded-lg p-10' >
          <label htmlFor="title" className="text-white">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full h-10 border border-gray-300 rounded-md px-4 mb-4"
          />
          <label htmlFor="description" className="text-white">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full h-40 border border-gray-300 rounded-md px-4 resize-none mb-4"
          />
          <label htmlFor="imageLink" className="text-white">Image Link</label>
          <input
            type="text"
            id="imageLink"
            value={imageLink}
            onChange={handleImageLinkChange}
            className="w-full h-10 border border-gray-300 rounded-md px-4 mb-4"
          />
          <button type="submit" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Submit
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>} 
        </form>
      </div>
    </div>
  );
  
  
}

export default Blogpost;
