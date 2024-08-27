import React from 'react'
import { MdDelete } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { decrementqty, removeFromCart } from '../Redux/Slices/CartSlice';
import { incrementqty } from '../Redux/Slices/CartSlice';


const CartItems = ({ id, img, name, price, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className='relative lg:w-[21vw] w-[94vw] border rounded-xl shadow-md mx-4 '>
      <div className='px-2 py-2 flex gap-3'>
        <img src={img} alt="Items" className='lg:h-[60px] lg:w-[60px] h-[60px] w-[60px]' />

        <div className='flex flex-col'>
          <div className='flex items-center font-semibold gap-4 justify-between'>
            <h3 className=' text-zinc-700 text-lg text-wrap w-[90%]'>{name}</h3>
            <MdDelete onClick={()=>{dispatch(removeFromCart({id,img,name,price,qty}))}} className='absolute right-5  text-zinc-400 text-2xl cursor-pointer' />
          </div>
          <div className='flex items-center '>
            <h3 className='text-green-500 font-bold text-lg'>&#8377;{price}</h3>
            <div className='flex items-center absolute right-5 gap-1 text-xl'>
              <CiSquareMinus onClick={()=>{dispatch(decrementqty({id}))}} className='cursor-pointer rounded-md text-2xl ' />
              <div className='text-green-500'>{qty}</div>
              <CiSquarePlus onClick={()=>{dispatch(incrementqty({id}))}}  className='cursor-pointer rounded-md text-2xl ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
