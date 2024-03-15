import React from 'react';
import BG from '../assets/main.png';

function Home() {
  return (
    <div className='bg-black h-screen w-screen' style={{backgroundImage:`url(${BG})`}}>
      <div className='pt-64 pl-64 '>
        <h2 className='logo text-white glitch' data-text='Neo Tokyo'>Neo<br/> Tokyo</h2>
        <p className='text-white  text-4xl para'>Leveling up creativity <br/> One pixel at a time</p>
        <button className='border border-white rounded-lg bg-black w-40 h-14 text-white mt-20 text-2xl txt'>Get Started</button>
      </div>
    </div>
  );
}

export default Home;