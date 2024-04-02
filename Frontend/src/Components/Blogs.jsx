import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import spidey from '../assets/spidey.jpg';
import bg from '../assets/glbg.jpg';
import axios from 'axios';

function Blogs() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showCommentsSlide, setShowCommentsSlide] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogResponse = await axios.get(`http://localhost:3000/blog/${id}`);
        setBlog(blogResponse.data);
        setComments(blogResponse.data.comments); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = async () => {
    if (newComment.trim() !== "") {
      try {
        const response = await axios.post(`http://localhost:3000/blog/${id}/comments`, {
          username: "You",
          comment: newComment
        });
        const newCommentData = response.data; 
        setComments([...comments, newCommentData]); 
        setNewComment("");
      } catch (error) {
        console.error('Error posting comment:', error.response); 
      }
    }
  };
  
  const toggleCommentsSlide = () => {
    setShowCommentsSlide(!showCommentsSlide);
  };

  return (
    <div className='screen h-screen w-screen overflow-scroll overflow-x-hidden' style={{ backgroundImage: `url(${bg})` }}>
      <div className='sticky top-0 z-10 text-white text-4xl pl-24 pt-6 h-24 bg-black bg-opacity-90 flex'>
        <h1 className='icon'>
          Neo Tokyo
        </h1>
        <Link to='/Landing'><h2 className='text-2xl mt-2 ml-[680px] cursor-pointer'>Home</h2></Link>
        <h2 className='text-2xl mt-2 ml-20 cursor-pointer'>Chat</h2>
        <h2 className='text-2xl mt-2 ml-20 cursor-pointer'>Community</h2>
        <Link to='/Profile'><img src={spidey} className='ml-[70px] h-10 w-10 bg-cover rounded-full' alt="" /></Link>
      </div>

      {blog && (
        <div className='ml-[850px] text-4xl text-white font-bold mt-10'>
          {blog.title}
        </div>
      )}

      <div className='flex justify-between px-20 mb-20 mt-10'>
        <div className='h-80 w-[500px]  border border-white mt-40 leading-loose sticky' style={{ backgroundImage: `url(${blog && blog.image_link})`, backgroundSize: 'cover',backgroundPosition: 'center' }}></div>
        <div className=' w-[600px] ml-[20px] text-white' style={{ lineHeight: 2.5 }}> 
          {blog && blog.description}
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='mb-20 bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group' onClick={toggleCommentsSlide}>
          <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Read Comment
        </button>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${showCommentsSlide ? 'opacity-100' : 'opacity-0'} ${showCommentsSlide ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        {showCommentsSlide && (
          <div className="flex flex-col items-center mb-2 border border-white bg-black">
            <h2 className="text-xl font-extrabold mt-10 pb-10 text-white">Comments</h2>
            <div className="border border-red-500 w-[90vw] h-fit bg-gray-100 p-4 rounded-lg">
              {comments.map((comment, index) => (
                <div key={index} className=" w-72  mb-2">
                  <p className="font-bold text-blue-600">{comment.username}: </p>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
            <textarea value={newComment} onChange={handleInputChange} rows="4" cols="50" placeholder="   Write your comment here..." className="p-2 border border-gray-300 rounded-md mt-4 w-[90vw]"></textarea>
            <button onClick={handlePostComment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded mt-10 mb-20">Post Comment</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
