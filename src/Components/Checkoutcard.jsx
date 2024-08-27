import React from 'react'

const Checkoutcard = ({id,name,img,qty,price}) => {
  return (
    <div className='lg:w-[40vw] w-full flex gap-4 my-2 items-center justify-between border-1 rounded-xl shadow-md p-3 '>
        <div>
            <div className='text-lg  text-zinc-800 font-bold'>{name}</div>
            <div className='text-md text-zinc-600 font-semibold'>Qty {qty}</div>
        </div>
            <div className='text-md text-zinc-800 font-semibold'> ₹{price}.00 each</div>
        
    </div>
  )
}

export default Checkoutcard
