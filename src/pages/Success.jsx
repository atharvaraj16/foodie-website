import React, { useEffect, useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import { useDispatch } from 'react-redux';
import { deletecart } from '../Redux/Slices/CartSlice';
const Success = () => {
  const dispatch=useDispatch();
  const[Loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
    dispatch(deletecart());
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen '>   
      {Loading==true?<PropagateLoader color="#36d7b7" />:
      <div className='flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-semibold mb-2'>Order Successful!</h2>
      <div className='text-lg text-green-900'>Your Order Successfully Placed!!</div>
      </div>}
    </div>
  )
}

export default Success
