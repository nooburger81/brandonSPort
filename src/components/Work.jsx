import React from 'react'
import tiktaktoe from '../assets/tictaktoe.png'
import foove from '../assets/foove.png'
import what from '../assets/what.png'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#134330]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
            <div 
            style={{ backgroundImage: `url(${tiktaktoe})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                        Tic-Tac-Toe

                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://watch.screencastify.com/v/qEk0BDCagHU066IYlJ5P">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo</button>
                    </a>
                    <a href="https://github.com/nooburger81/codeName-caramel">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code</button>
                    </a>

                  </div>
                </div>
            </div>
            <div 
            style={{ backgroundImage: `url(${foove})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                        FOOVE

                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://watch.screencastify.com/v/lBPpT9N4lDBAGdTRLYmZ">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo</button>
                    </a>
                    <a href="https://github.com/nooburger81/Group-Project-mine-">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code</button>
                    </a>

                  </div>
                </div>
            </div>
            <div 
            style={{ backgroundImage: `url(${what})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                        Quiz Game

                  </span>
                  <div className='pt-8 text-center'>
                    {/* <a href="https://watch.screencastify.com/v/CcImirE7YT2nsNXPSfxQ">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo</button>
                    </a> */}
                    <a href="https://github.com/nooburger81/gtbc-pro3">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code</button>
                    </a>

                  </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Work