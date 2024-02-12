import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-slate-800 to-black w-full h-screen p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-white font-bold inline border-b-4 border-grey-500'>Contact</p>
                <p className='py-6 text-white'>Get in touch with me!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/d0ca7ab5-7cb4-4c1d-9ec6-ed3cce5e9e10' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                      type='text' 
                      name='name'
                      placeholder='Enter your name'
                      className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <input 
                      type='text' 
                      name='email'
                      placeholder='Enter your Email'
                      className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                   <textarea
                     name='message'
                     placeholder='Enter your text here'
                     rows='10'
                     className='p-2 bg-transparent border-2 rounded-md focus:outline-none' 
                   ></textarea>

                   <button className='bg-gradient-to-b from-cyan-500  text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact