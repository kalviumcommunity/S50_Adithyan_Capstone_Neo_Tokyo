import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import spidey from '../assets/spidey.jpg';
import bg from '../assets/glbg.jpg';

function Blogs() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [showAddCommentSection, setShowAddCommentSection] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogResponse = await fetch(`http://localhost:3000/blog/${id}`);
        const blogData = await blogResponse.json();
        setBlog(blogData);
        
        const commentsResponse = await fetch(`http://localhost:3000/blog/${id}/comments`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const toggleCommentSection = () => {
    setShowCommentSection(!showCommentSection);
  };

  const toggleAddCommentSection = () => {
    setShowAddCommentSection(!showAddCommentSection);
  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { commenter: "You", comment: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className='h-screen w-screen overflow-scroll overflow-x-hidden' style={{ backgroundImage: `url(${bg})` }}>
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

      <div className='flex justify-center '>
        <button className='mb-20 bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group' onClick={toggleCommentSection}>
          <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Read Comment
        </button>
      </div>

      {showCommentSection && (
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-xl font-bold mb-2 text-white">Comments</h2>
          <div className="border border-red-500 w-96 bg-gray-100 p-4 rounded-lg">
            {comments.map((comment, index) => (
              <div key={index} className=" w-72  mb-2">
                <p className="font-bold text-blue-600">{comment.commenter}: </p>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAddCommentSection}>Add Comment</button>
          </div>
        </div>
      )}

      {showAddCommentSection && (
        <div className="flex flex-col items-center mb-6">
          <textarea value={newComment} onChange={handleInputChange} rows="4" cols="50" placeholder="Write your comment here..." className="p-2 border border-gray-300 rounded-md mb-2"></textarea>
          <button onClick={handlePostComment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Post Comment</button>
          <button className="text-blue-500 mt-2" onClick={toggleAddCommentSection}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Blogs;
