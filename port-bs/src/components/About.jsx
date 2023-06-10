import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#134330] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
                        About
                        </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                    <p aria-label="Hi! I'm a developer">
  Hi! I'm a&nbsp;<span class="typewriter"></span></p>
                </div>
                <div>
                    <p>
                        I read somewhere that, if you do not create then you are only valued by your tastes....or something like that. That sounds pretty lame to me. BUT! I must agree. I live for the process of being inspired so intently that I have no choice BUT to do something about it. And that is when I am at my best as a creator.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About