import React from 'react'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1, 
            src: ''
        },
        {
            id: 2, 
            src: ''
        },
        {
            id: 3, 
            src: ''
        },
    ]



  return (
    <div name="portfolio" className="w-full md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flac flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-grey-500">Portfolio</p>
            <p className="py-6">Check out some of my work</p>
          </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {portfolios.map(({id, src}) => ( 
            <div key={id} className='shadow-md shadow-grey-600 rounded-lg'>
              <img src="" alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
          ))}
          </div>
        </div>    
    </div>
  )
}

export default Portfolio

          
