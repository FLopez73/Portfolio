import React from 'react';
import Hero from '../assets/hero.png'
import Wave from '../assets/wave.mp4'

const Home = () => {

 return (
   <>
    <video autoPlay loop muted className="absolute z-1 w-full h-full object-cover">
      <source src={Wave} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div name="home" className="relative flex flex-col justify-center h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center flex-grow">
          <h2 className="text-3xl sm:text-7xl font-bold text-white">
            Hi, I am <span className='text-cyan-500'>Felix</span>, a Full Stack Web Developer.
          </h2>
          <h3 className='text-white'>Based in San Diego,CA</h3>
        </div>
        <div>
          <img src={Hero} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
         </div>
       
    </div>
   </>
  );
};

export default Home;
            




