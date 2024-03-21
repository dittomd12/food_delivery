
import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    //console.log(data)
    const [foods,setFoods] = useState(data)
    //filter type
    const filterType= (category) => {
        setFoods(data.filter((item)=>{
            return item.category===category;
        })
        )

    }

    //filter price
    const filterPrice=(price)=>{
        setFoods(data.filter((item)=>{
            return item.price===price
        }))
    }
  return (
    <div className='max-w-[1600px] mx-auto p-4 py-12'>
        <h1 className='text-green-600 font-bold text-4xl text-center font-abc'>Top rated <span className='text-black'>menu</span> items</h1>
        {/*filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/*filter type*/}
            <div>
                <p className='font-bold text-green-950 font-abc'>filter types</p>
                <div className='flex flex-wrap justify-between'>
                    <button onClick={()=>setFoods(data)} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>All</button>
                    <button onClick={()=>filterType('burger')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>Burgers</button>
                    <button onClick={()=>filterType('pizza')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>Chicken</button>
                </div>
            </div>
            {/*filter price*/}
            <div>
                <p className='font-bold text-green-950 font-abc'>filter price</p>
               <div className='flex justify-between max-w-[350px] w-full'>
                    <button onClick={()=>filterPrice('$')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>$</button>
                    <button onClick={()=>filterPrice('$$')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='m-1 text-green-600 border-green-600 hover:text-white hover:bg-green-600 font-abc'>$$$$</button>
               </div>
            </div>
        </div>

        {/*display foods*/}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=>(
              <div key={index} className='border shadow-lg hover:scale-105 duration-200 rounded-lg'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold font-abc'>{item.name}</p>
                    <p><span className='text-green-600 p-1 font-bold font-abc'>{item.price}</span></p>
                </div>
              </div>  
            ))}
        </div>
    
    </div>
  )
}

export default Food