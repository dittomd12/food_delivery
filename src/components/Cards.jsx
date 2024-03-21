
import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1600px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full bg-black/30 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 font-abc'>Home Delivery</p>
                <p className='px-2 font-abc'>24x7</p>
                <button className='border-white text-white bg-transparent hover:bg-white hover:text-black mx-2 absolute right-2 bottom-2 font-abc'>Order</button>
            </div>
            <img className='max-h-[150px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full bg-black/30 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 font-abc'>New Restaurants</p>
                <p className='px-2 font-abc'>added daily</p>
                <button className='border-white text-white bg-transparent hover:bg-white hover:text-black mx-2 absolute right-2 bottom-2 font-abc'>Order</button>
            </div>
            <img className='max-h-[150px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className=' absolute w-full h-full bg-black/30 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 font-abc'>Today's Special</p>
                <p className='px-2 font-abc'>tasty treates</p>
                <button className='border-white text-white bg-transparent hover:bg-white hover:text-black mx-2 absolute right-2 bottom-2 font-abc'>Order</button>
            </div>
            <img className='max-h-[150px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default Cards