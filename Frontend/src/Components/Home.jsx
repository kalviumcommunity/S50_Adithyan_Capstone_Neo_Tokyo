import React, { useEffect } from 'react';
import BG from '../assets/main.png';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const glitchText = document.querySelector('.glitch');
    glitchText.addEventListener('mouseover', () => {
      glitchText.classList.add('glitch-active');
      setTimeout(() => {
        glitchText.classList.remove('glitch-active');
      }, 1500);
    });
  }, []);

  return (
    <div className='bg-black h-screen w-screen' style={{backgroundImage:`url(${BG})`}}>
      <div className='pt-64 pl-64 '>
      <h2 className='logo text-white'>
  <span className='glitch' data-text='Neo Tokyo'>Neo</span><br/> Tokyo
</h2>

        <p className='text-white  text-4xl para'>Leveling up creativity <br/> One pixel at a time</p>
        <button className='border border-white rounded-lg bg-black w-40 h-14 text-white mt-20 text-2xl txt transition duration-300 ease-in-out hover:bg-white hover:text-black'>
  <Link to="/Landing">Get Started</Link>
</button>
      </div>
    </div>
  );
}

export default Home;