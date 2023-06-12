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
  Hi! I'm a&nbsp;<span className="typewriter"></span></p>
                </div>
                <div>
                    <p>
                        For over 20 years I worked my way up the ladder of the culinary industry, only to have those dreams squashed in the wake of the pandemic. But during that time I learned invaluable lessons in self-discipline, time management, and above all--how to be creative and love what you do. Don't let anyone tell you it's too late to learn something new and exciting. Making this pivot was the best choice I've ever made, and I cannot wait to journey further into this ever-evolving, ever-challenging, yet ALWAYS mind-blowing world of web development.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About