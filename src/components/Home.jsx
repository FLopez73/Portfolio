import React, { useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Hero from '../assets/hero.png'

const Home = () => {
  const [currentSection, setCurrentSection] = useState('home');
 

 

  const handleClick = () => {
    if (currentSection === 'home') setCurrentSection('about');
    else if (currentSection === 'about') setCurrentSection('portfolio');
    else if (currentSection === 'portfolio') setCurrentSection('tech stack');
    else if (currentSection === 'tech stack') setCurrentSection('contact');
    else if (currentSection === 'contact') setCurrentSection('home');
  };

  return (
    <div name="home" className="h-screen w-full flex flex-col justify-center bg-#66a3b3">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center flex-grow">
          <h2 className="text-3xl sm:text-7xl font-bold">
            Hi, I am <span className='text-cyan-500'>Felix</span>, a Full Stack Web Developer.
          </h2>
          <h3>Based in San Diego,CA</h3>
        </div>
        <div>
          <img src={Hero} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
         </div>
        <div className="flex justify-center fixed bottom-0 mb-8 w-full">
        <Link to={currentSection} smooth duration={500} offset={-50} className="group animate-bounce hover:animate-none" onClick={handleClick} >
         
            <BsFillArrowDownCircleFill size={30} />
         
        </Link>
      </div>
    </div>
  );
};

export default Home;
            




