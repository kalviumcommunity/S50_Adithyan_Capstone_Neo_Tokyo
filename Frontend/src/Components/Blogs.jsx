import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import spidey from '../assets/spidey.jpg';
import bg from '../assets/glbg.jpg';

function Blogs() {
  const [fixedImage, setFixedImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.fixed-image');
      if (image) {
        const { top } = image.getBoundingClientRect();
        if (top <= window.innerHeight * 0.45) {
          setFixedImage(true);
        } else {
          setFixedImage(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className='ml-[800px] text-4xl text-white font-bold mt-10'>
        Lorem ipsum dolor 
      </div>
      <div className='flex justify-center mb-20 mt-10'>
        <div className={`h-80 w-[500px] border border-white mt-40 leading-loose ${fixedImage ? 'fixed-image' : ''}`} style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKMOXRlq9ts-kD6g4EmqQ7cw5WBSWR4T4aA&usqp=CAU")', backgroundSize: 'cover' }}></div>
        <div className=' w-[950px] ml-[20px] text-white' style={{lineHeight:2.5}}>
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
          Eventually, the spider duo is confronted with Kraven the Hunter, who is basically a human version of the
          Predator who loves to wear fur. He's desperate for a hunt that can match his abilities, and New York City,
          with all of its costume-wearing superpowered beings, is the perfect hunting ground. Oh, and he also
          commands an army of like-minded hunters outfitted with futuristic weaponry and gear.        </div>
      </div>
      <button className='text-white'>Comment</button>
    </div>
  );
}

export default Blogs;
