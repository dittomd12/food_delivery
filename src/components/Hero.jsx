
import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1600px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-50 max-h-[500px] bg-black/35 flex flex-col justify-center rounded-xl'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-abc'>don't <span>starve</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-abc'>&ensp;just <span className='text-green-500'>order<span className='text-white'>.</span></span></h1>
            </div>
            <img className='w-full h-[400px] rounded-xl object-cover' src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Hero