import React from 'react'
import FoodCards from './FoodCards'
import FoodData from '../Data/FoodData'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
const Fooditems = () => {
  const category=useSelector((state)=>state.category.category)
  const search=useSelector((state)=>state.Search.Search)
  const handletoast=(name)=>toast.success(`${name} added Successfully`)
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className='pt-6 mt-[6vh] mx-4 flex gap-7 flex-wrap'>
      { FoodData.filter((food)=>{
        if(category==="All"){
          return food.name.toLowerCase().includes(search.toLowerCase());
        }
        else{
          return (category===food.category && food.name.toLowerCase().includes(search.toLowerCase()))
        }
      }).map((items)=>(
        <FoodCards key={items.id} id={items.id} img={items.img} name={items.name} price={items.price} desc={items.desc.slice(0,60)} category={items.category} rating={items.rating} handletoast={handletoast}/>
      ))
    }

    </div>
    </>
  )
}

export default Fooditems
