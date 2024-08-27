import React from 'react'
import { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { SetSearch } from '../Redux/Slices/SearchSlice';
const Navbar = () => {
    const[date,setDate]=useState(new Date())
    const dispatch=useDispatch();
  return (
    <div className='w-min-full py-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 px-6'>
        <div id="name">
            <h3 id="date" className='text-[5vw] lg:text-2xl font-bold text-[#4D5765]'>{date.toUTCString().slice(0,16)}</h3>
            <div id="title" className='text-[5vw] lg:text-2xl font-semibold '>Foodies Foods</div>
        </div>
        <div id="Search" className='flex'>
            <input type="search"  placeholder='Search here' autoComplete='off' name='Search' className='relative px-3 py-2 lg:w-[25vw] w-[80vw] border-2 border-zinc-400 outline-none rounded-lg' onChange={(e)=>dispatch(SetSearch(e.target.value))}/>
         
        </div>
    </div>
  )
}

export default Navbar
