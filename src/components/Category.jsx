
import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>
        <h1 className='text-green-600 font-bold text-4xl text-center font-abc'>Top menu items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
          {categories.map((item,index)=>(
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                <h2 className='font-bold sm:text-xl font-abc'>{item.name}</h2>
                <img className='w-20' src={item.image} alt={item.name} />

            </div>
          ))}  
        </div>
    </div>
  )
}

export default Category