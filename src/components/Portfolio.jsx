import React from 'react'
import concertgo from '../assets/concertgo.png'
import felinefinder from '../assets/felinefinder.png'
import apartmentapp from '../assets/apartmentapp.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1, 
            src: concertgo,
            demoLink: 'https://concertgo.onrender.com/',
            codeLink: 'https://github.com/Wham-Devs/concert-go-frontend/tree/main/concert-go-frontend',
        },
        {
            id: 2, 
            src: felinefinder,
            demoLink: '',
            codeLink: 'https://github.com/FLopez73/cat-tinder-frontend'
        },
        {
            id: 3, 
            src: apartmentapp,
            demoLink: '',
            codeLink: 'https://github.com/FLopez73/apartment-app-frontend-lux-r-us'
        },
    ]



  return (
    <div name="portfolio" className=" bg-gradient-to-b from-slate-800 to-black w-full md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flac flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline  text-white border-b-4 border-grey-500">Portfolio</p>
            <p className=" text-white py-6">Check out some of my work</p>
          </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {portfolios.map(({id, src, demoLink, codeLink}) => ( 
            <div key={id} className='shadow-md shadow-grey-100 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center'>
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className=" text-white w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className=" text-white w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
                </div>
            </div>
          ))}
          </div>
        </div> 
     
    </div>
  )
}

export default Portfolio

          
