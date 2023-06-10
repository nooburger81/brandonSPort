import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';
import 'animate.css';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#134330]'>


      {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-2xl text-yellow-600 animate__animated animate__fadeInDown animate__delay-1s'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] animate__animated animate__fadeInUp animate__delay-2s'>Brandon Sebastian</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] animate__animated animate__fadeInUp animate__delay-3s'>I'm a Junior Code Monkey</h2>
          <p className='text-xl text-white py-4 max-w-[700px] animate__animated animate__fadeInUp animate__delay-4s'>I'm a pretty sorry excuse for a developer at this point, really. Let's be honest. But, I can type pretty fast for a redhead. So, there's that.</p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-600'>View Work 
              <span className='group-hover:rotate-180 duration-300'>
                
                <HiArrowNarrowRight className='ml-6'/>
              </span>
          </button>
          </Link>
        </div>
        </div>

    </div>
  ) 
}

export default Home