import React, { useState } from 'react';
import landing from '../assets/Landing.png';
import menu from '../assets/menu.png';
import { useNavigate } from 'react-router-dom';
import spidey from '../assets/spidey.jpg'
function DropdownMenu({ isOpen, toggle }) {
  return (
    <div className={`dropdown absolute mt-12 w-52 h-3/4 bg-red-950 text-white rounded-xl shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isOpen ? 'visible' : 'invisible'}`}>
      <div className=' rounded-xl h-40 shadow-lg pt-10'>
        <div className=' h-10 w-10 border border-white rounded-3xl ml-20 '>
          <img src={spidey} className='bg-cover rounded-full' alt="" />
        </div>
        <p className='ml-16 mt-5'>John Doe</p>

      </div>
      <ul>
        <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">Home</li>
        <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">Chat</li>
        <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">Community</li>
        <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">About</li>
      </ul>
    </div>
  );
}

function Landing() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    navigate('/Loginpg');
  };

  const handleSignupClick = () => {
    navigate('/Signup');
  };

  return (
    <div>
      <div className='bg-black h-screen w-screen bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${landing})` }}>
        <div className='text-white text-4xl pl-24 pt-6 h-24 bg-black bg-opacity-50 flex'>
          <img src={menu} className='h-8 w-8 mr-6 mt-1 cursor-pointer hover:bg-gray-600 transition duration-300' alt="" onClick={toggleDropdown} />
          <h1 className='icon'>
            Neo Tokyo
          </h1>
          <input type='text' placeholder='search' className='h-9 w-56 text-sm rounded-lg ml-80 mt-2' style={{ textIndent: '30px' }} />
          <h2 className='text-2xl mt-2 ml-60 cursor-pointer' onClick={handleLoginClick}>Login</h2>
          <h2 className='text-2xl mt-2 ml-20 cursor-pointer' onClick={handleSignupClick}>Sign up</h2>
          <div className=' h-10 w-10 border border-white rounded-3xl ml-20 '>
          <img src={spidey} className='bg-cover rounded-full' alt="" />

          </div>

        </div>
        <div className='flex'>
          <div className="overflow-auto blog grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 w-2/4 mx-auto items-center justify-center">


            <div className="bg-red-950 p-5 rounded-lg">
              <div className='w-full h-60 bg-blue-800'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU" alt="" />
              </div>
              <h2 className='text-xl font-bold text-white'>LOREM</h2>
              <p className='text-xl line-clamp-3 text-white'>Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid enim voluptates corporis quia odio quod suscipit magni offrem. In, facilis. Nesciunt.</p>
            </div>

            <div className="bg-red-950 p-5 rounded-lg">
              <div className='w-full h-60 bg-blue-800'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU" alt="" />
              </div>
              <h2 className='text-xl font-bold text-white'>LOREM</h2>
              <p className='text-xl line-clamp-3 text-white'>Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid enim voluptates corporis quia odio quod suscipit magni offrem. In, facilis. Nesciunt.</p>
            </div>

            <div className="bg-red-950 p-5 rounded-lg">
              <div className='w-full h-60 bg-blue-800'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU" alt="" />
              </div>
              <h2 className='text-xl font-bold text-white'>LOREM</h2>
              <p className='text-xl line-clamp-3 text-white'>Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid enim voluptates corporis quia odio quod suscipit magni offrem. In, facilis. Nesciunt.</p>
            </div>

            <div className="bg-red-950 p-5 rounded-lg">
              <div className='w-full h-60 bg-blue-800'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU" alt="" />
              </div>
              <h2 className='text-xl font-bold text-white'>LOREM</h2>
              <p className='text-xl line-clamp-3 text-white'>Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid enim voluptates corporis quia odio quod suscipit magni offrem. In, facilis. Nesciunt.</p>
            </div>
            
            
            <div className="bg-red-950 p-5 rounded-lg">
              <div className='w-full h-60 bg-blue-800'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU" alt="" />
              </div>
              <h2 className='text-xl font-bold text-white'>LOREM</h2>
              <p className='text-xl line-clamp-3 text-white'>Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid enim voluptates corporis quia odio quod suscipit magni offrem. In, facilis. Nesciunt.</p>
            </div>

            <div className="bg-red-950 p-5 rounded-lg">
              <div className='w-full h-60 bg-blue-800'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU" alt="" />
              </div>
              <h2 className='text-xl font-bold text-white'>LOREM</h2>
              <p className='text-xl line-clamp-3 text-white'>Lorem explicabo, totam obcaecati perferendis voluptatum ex aliquid enim voluptates corporis quia odio quod suscipit magni offrem. In, facilis. Nesciunt.</p>
            </div>

          </div>
          <DropdownMenu isOpen={isDropdownOpen} toggle={toggleDropdown} />
        </div>

      </div>
    </div>
  );
}


export default Landing;
