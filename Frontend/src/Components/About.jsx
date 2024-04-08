import React from 'react';
import about from '../assets/about.png';


function About() {
  return (
    <div>
      <div className='h-fit bg-cover about' style={{backgroundImage: `url(${about})`}}>
        <nav className='text-white h-20 bg-black bg-opacity-50 items-center text-center pt-6 text-3xl'>
          About
        </nav>
        <div className='scroll-animation'>
          <p className='text-white text-center leading-10 pt-40'>Welcome to Neo Tokyo, your gateway to the future of collaborative game development.<br/> Born from a shared passion for gaming and a desire to break down the barriers hindering creative collaboration, Neo Tokyo is more than just a platform—it's a community-driven movement that's reshaping the way games are made.

          Our Story
          </p>
          <p className='text-center text-white text-3xl pt-36 '>Our Story</p>
          <p className='text-center text-white pt-10 leading-10'>Neo Tokyo was founded by a group of game developers, designers, <br/>and enthusiasts who experienced firsthand the challenges of working on projects in isolation. We realized that game development <br/>is a collaborative endeavor that thrives on diversity, creativity, and shared knowledge. Determined to create a solution, we set out to build a platform <br/> that would bring together like-minded individuals from around the world, empowering them to collaborate, share resources, and create amazing games together.

          <br/>Our journey began with a simple idea: to democratize game development and make it accessible to all. We believe that everyone should have the opportunity to contribute to the vibrant world of gaming, regardless of their background or experience. Thus, Neo Tokyo was born—a place where developers, designers, artists, and gamers alike can come together to share their passion, learn from one another,and bring their creative visions to life. Join us in shaping the future of gaming, where innovation knows no bounds and every voice is heard.</p>
          <p className='text-center text-white text-3xl pt-36 '>Our Mission and Vision</p>
          <p className='text-center text-white pt-10 leading-10'>Mission: To democratize game development by providing an inclusive and accessible platform for creators of all skill levels to collaborate, learn, and grow.<br/>

          Vision: We envision a world where anyone with a passion for games can find their place in the vibrant community of Neo Tokyo, where innovation knows no bounds and every voice is heard.</p>

          <p className='text-center text-white text-3xl pt-36 '>Our Values</p> 
          <p className='text-center text-white pt-10 '>At Neo Tokyo, our values are at the heart of everything we do:<br/></p>
          <p className='text-white ml-[350px] pt-10 leading-[50px]'>
            <li>Collaboration: We believe in the power of teamwork and collaboration to achieve greatness.</li>
            <li>Innovation: We embrace innovation and encourage experimentation to push the boundaries of game development.</li>
            <li>Inclusivity: We strive to create an inclusive and welcoming community where everyone feels valued and respected.</li>
            <li>Community: We prioritize community engagement and support, fostering connections and sharing knowledge among our members.</li>
          </p>
          <p className='text-center text-white text-3xl pt-36 '>Contact with Us</p>
          <p className='text-center text-white pt-10 leading-10 '>Stay updated on the latest news and announcements from Neo Tokyo by following us on social media:</p>
        </div>
        <div className='flex justify-center pt-10 pb-20
        '>
           <button className='h-16 w-16 mr-40 hover:bg-gray-200 rounded-full'>
  <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
</button>

<button className='h-16 w-16 mr-40 hover:bg-black rounded-full'>
  <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
</button>

<button className='h-16 w-16 mr-10 hover:bg-gray-200 rounded-full'>
  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="" />
</button>


        </div>
      </div>
    </div>
  );
}

export default About;
