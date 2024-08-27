import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import CartItems from './CartItems';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const Navigate = useNavigate();
    const[cart,setCart]=useState(false);
    const cartItems = useSelector((state) => state.cart.cart)
    const totalqty=cartItems.reduce((totalqty,items)=>totalqty+items.qty,0);
    const totalamt=cartItems.reduce((totalamt,items)=>totalamt+items.qty*items.price,0);
  return (
    <>    <div className={`fixed z-[999] right-0 top-0 bg-slate-100 h-[100vh] lg:w-[25vw] w-full  ${cart==false?'translate-x-full':'translate-x-0'} transform duration-600 ease-in-out`}>
      <div id="My-order-cancel-items" className=''>
        <div className='flex items-center justify-between my-8 mx-4'>
            <div className='lg:text-xl text-[8vw] font-semibold text-zinc-700'>My Order</div>
            <IoClose onClick={()=>setCart(!cart)} className='border-2 border-zinc-600 text-[6vw] lg:text-lg rounded-md cursor-pointer hover:text-orange-500 hover:border-orange-500' />
        </div>
        <div id="items" className='flex flex-col gap-2 items-center overflow-y-auto max-h-[60vh]'>
        {cartItems.length > 0 ? cartItems.map((items, index) => {
            return <CartItems key={index} id={items.id} img={items.img} name={items.name} price={items.price} qty={items.qty} />;
          }):<h2 className='text-xl font-bold text-zinc-700'>Your cart is empty</h2>}
        </div>
      </div>
      <div id="items-amount-checkout" className='flex flex-col absolute bottom-3 mx-4'>
          <div className='my-1 font-semibold text-md'>Items :{totalqty}</div>
          <div className='mb-2 font-semibold text-md'>Total amount :&#8377;{totalamt}</div>
          <div className='h-[1px] lg:w-[25vw] w-full bg-zinc-500'></div>
          <button onClick={()=>Navigate('/checkout')} className='lg:w-[22vw] w-[80vw] bg-green-500 px-4 py-2 ml-5 my-4 font-semibold text-white rounded-xl text-xl'>Checkout</button>
      </div>
    </div>
    <FaCartShopping onClick={()=>setCart(!cart)} className={`fixed border-1 bg-white rounded-full p-3 text-5xl bottom-7 right-7 cursor-pointer ${cartItems.length>0 && 'animate-bounce duration-500 transition-all'}`}/>
    </>
  )
}

export default Cart
