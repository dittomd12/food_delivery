import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaWallet,FaUserFriends} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'

const Navbar = () => {
    const [nav,setNav]=useState(false)
  return (
    <div className='max-w-300px mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-3'><span className='font-bold font-abc'>F<span className='text-green-500'>00</span>D!EE</span></h1>
            <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-15px'>
                <p className='bg-black text-white p-2 rounded-full font-abc font-semibold'>Delivery</p>
                <p className='p-1 font-abc font-semibold'>Takeaway</p>
            </div>
        </div>
        <div className='bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 w-full focus:outline-none font-abc font-semibold' type="text" placeholder='Search' />
        </div>
        <div>
            <button className='bg-white text-black hidden md:flex rounded-full items-center py-2 font-abc font-semibold'>
                <BsFillCartFill size={20} className='mr-1'/>Cart
            </button>
        </div>
        {/*menu*/}
        {nav ?<div className='bg-black/75 fixed w-full h-screen z-10 top-0 left-0'></div>:''}
        
        {/*side menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'}>
            
            <AiOutlineClose size={20} onClick={()=>setNav(!nav)} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='p-4 text-2xl'><span className='font-bold font-abc'>F<span className='text-green-500'>00</span>D!EE</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-700'>
                    <li className='text-xl py-4 flex font-abc'><FaWallet size={20} className='mr-4'/>Wallet</li>
                    <li className='text-xl py-4 flex font-abc'><TbTruckDelivery size={20} className='mr-4'/>Orders</li>
                    <li className='text-xl py-4 flex font-abc'><MdFavorite size={20} className='mr-4'/>Favorites</li>
                    <li className='text-xl py-4 flex font-abc'><BsFillSaveFill size={20} className='mr-4'/>Top picks</li>
                    <li className='text-xl py-4 flex font-abc'><AiFillTag size={20} className='mr-4'/>Promotions</li>
                    <li className='text-xl py-4 flex font-abc'><FaUserFriends size={20} className='mr-4'/>Invite friends</li>
                    <li className='text-xl py-4 flex font-abc'><MdHelp size={20} className='mr-4'/>Help</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar