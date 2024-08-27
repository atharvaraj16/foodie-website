import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';
const FoodCards = ({id, img, name, price, desc, category, rating, handletoast}) => {
  const dispatch =useDispatch();
  return (
    <div className='lg:w-[20vw] h-auto w-full px-4 p-4 mb-8 bg-white rounded-lg flex flex-col gap-2'>
        <img id="items-img" src={img} alt="here" className='bg-cover h-[30vh] w-auto cursor-grab hover:scale-110 transform duration-500 ease-in-out overflow-hidden' />
      <div id='items-title' className=' flex justify-between gap-5 text-md font-semibold'>
        <h3 className='leading-1'>{name}</h3>
        <h3 className='text-green-500 font-bold'>&#8377;{price}</h3>
      </div>
      <div id='items-desc ' className='text-sm'>
        <h4>{desc}...</h4>
      </div>
      <div id='items-rating' className='flex justify-between items-center '>
        <h3 className='flex items-baseline gap-1'><span className='text-yellow-400'><FaStar/></span>{rating}</h3>
        <button onClick={()=>{dispatch(addToCart({id,img,name,price,qty:1})); 
        handletoast(name)} } className='bg-green-500 rounded-lg  px-2 py-1 font-semibold text-white'>Add to Cart</button>
      </div>
    </div>
  )
}

export default FoodCards
