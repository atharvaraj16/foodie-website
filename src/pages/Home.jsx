import React from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Fooditems from '../Components/Fooditems'
import Cart from '../Components/Cart'

const Home = () => {
  return (
    <div className='w-full h-max-screen bg-[#F4F4F4] '>
      <Navbar></Navbar>
      <Menu></Menu>
      <Fooditems></Fooditems>
      <Cart></Cart>
    </div>
  )
}

export default Home
