import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold">
                    I'm a Full Stack Web Developer
                </h2>
                <p className="py-4 max-w-md">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
                <div className="flex justify-center">
                    <Link to='about' smooth duration={500} className="group w-fit px-6 py-3 ">
                        <span className="group-hover:rotate-5 duration-300">
                        <BsFillArrowDownCircleFill size={30}/>
                        </span>
                    </Link> 
                </div>
            </div>
            <div>
                <img src='' alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>
  )
}

export default Home
        
