
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import spidey from '../assets/spidey.jpg';
import bg from '../assets/glbg.jpg';

function Blogs() {
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [showAddCommentSection, setShowAddCommentSection] = useState(false);
  const [comments, setComments] = useState([
    { commenter: "John Doe", comment: "Spider-Man 2 is amazing!" },
    { commenter: "Jane Smith", comment: "I can't wait to play as both Spider-Man and Miles Morales!" },
    { commenter: "Bob Johnson", comment: "Kraven the Hunter sounds like a formidable opponent." }
  ]);
  const [newComment, setNewComment] = useState(""); 

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
    <div className='h-screen w-screen overflow-scroll overflow-x-hidden' style={{backgroundImage:`url(${bg})`}}>
      <div className='sticky top-0 z-10 text-white text-4xl pl-24 pt-6 h-24 bg-black bg-opacity-90 flex'>
        <h1 className='icon'>
          Neo Tokyo
        </h1>
        <Link to='/Landing'><h2 className='text-2xl mt-2 ml-[680px] cursor-pointer'>Home</h2></Link>
        <h2 className='text-2xl mt-2 ml-20 cursor-pointer'>Chat</h2>
        <h2 className='text-2xl mt-2 ml-20 cursor-pointer'>Community</h2>
        <Link to='/Profile'><img src={spidey} className='ml-[70px] h-10 w-10 bg-cover rounded-full' alt="" /></Link>
      </div>
      <div className='ml-[850px] text-4xl text-white font-bold mt-10'>
        Lorem ipsum dolor 
      </div>
      <div className='flex justify-between px-20 mb-20 mt-10'>
        <div className='h-80 w-[500px]  border border-white mt-40 leading-loose'  style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU")', backgroundSize: 'cover' }}></div>
        <div className=' w-[600px] ml-[20px] text-white' style={{lineHeight:2.5}}>
          <br/>
          The first Spider-Man game from Insomniac was proof of just how fun it could be to play as the web-slinger.
          It nailed the feeling of momentum and grace inherent in the character and fused it with a solid — if at
          times formulaic — open-world action game. Two years later, the studio kept things going with a smaller,
          tighter spinoff focused on Miles Morales. Now comes the inevitable full sequel, which not only has a two in
          the name but also two spider-men to play as. Spider-Man 2 doesn't change things up substantially. Instead,
          it's the kind of sequel that smartly builds upon the original. The side missions can still be dull, but
          the main storyline — which involves a murderous Kraven the Hunter and a new take on Venom — is excellent,
          putting the series firmly in its emo era. And still feels as good as ever to be Spider-Man — no matter
          which one you're controlling.<br/>
          <br/>Things start off with a helpful recap. Miles is trying hard to fill out a
          college application, and he calls Peter for help, with the two going over just how much has happened over
          the last few years. Both are just a little bit older and more mature here; at the very beginning of the
          game, Peter has started a job as a science teacher at Miles's school. One of the main narrative themes in
          Spider-Man 2 — as in a lot of Spider-Man stories — is how hard it is to balance being a hero with being
          a person. The game wastes no time getting to this: just as Peter introduces himself to the class, he and
          Miles are forced to deal with gigantic Sandman assaulting the city. There's actually quite a lot going on
          in the main story, with multiple threats coming from multiple villains. Sandman is just a teaser.

        </div>
      </div>
      <div className='flex justify-center '>
        <button className='bg-white font-bold h-8 w-48 rounded-md mb-6' onClick={toggleCommentSection}> Read Comment</button>
      </div>
      {showCommentSection && (
        <div className=" flex flex-col items-center mb-6">
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
        <div className="flex justify-center mt-4">
          <textarea value={newComment} onChange={handleInputChange} rows="4" cols="50" placeholder="Write your comment here..." className="p-2 border border-gray-300 rounded-md mr-2"></textarea>
          <button onClick={handlePostComment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Post Comment</button>
        </div>
      )}
    </div>
  );
}

export default Blogs;
