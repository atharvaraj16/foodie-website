import React, { useState,useEffect } from 'react'
import FoodData from '../Data/FoodData'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/Slices/CategorySlice';

const Menu = () => {
  const dispatch=useDispatch();
  const SelectedCategory=useSelector((state)=>state.category.category)
  const[categories,setCategories]=useState([]);
  const listcategories=()=>{
    const uniquecategories=[
      ...new Set(FoodData.map((food)=>food.category))
    ];
    setCategories(uniquecategories);
  }
  useEffect(()=>{
    listcategories();
  },[]);
  return (
    <div className='mt-[6vh] flex flex-col gap-5 text-2xl font-semibold px-6'>
      <h2>Find the best food</h2>
      <div className='flex gap-4 text-[17px] font-semibold overflow-x-scroll lg:overflow-auto'>
      <input type="button" onClick={()=>dispatch(setCategory("All"))} value="All" className={`bg-green-500  px-3 py-1 cursor-pointer rounded-xl tracking-wide hover:bg-green-500 hover:text-white ${SelectedCategory==="All" && "bg-zinc-300 text-zinc-900"}`}/>
        {categories.map((val,index)=>(
            <input type="button" onClick={()=>dispatch(setCategory(val))} key={index} value={val} className={`bg-green-500  px-3 py-1 cursor-pointer rounded-xl tracking-wide hover:bg-green-500  hover:text-black ${SelectedCategory===val && "bg-zinc-300 text-zinc-900"}`}/>
        ))}
      </div>
    </div>
  )
}

export default Menu