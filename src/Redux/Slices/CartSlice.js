import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const exist=state.cart.find((items)=>items.id===action.payload.id);
        if(exist){
            state.cart=state.cart.map((items)=>
                items.id===action.payload.id ? {...items,qty:items.qty+1}:items
        )}

         else{
            state.cart.push(action.payload)
         }
        },
        deletecart:(state)=>{
                state.cart=[]
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !== action.payload.id)
        },
        incrementqty:(state,action)=>{
            state.cart=state.cart.map((items )=>
               {return items.id===action.payload.id?{...items,qty:items.qty+1}:items}
            )
        },
        decrementqty:(state,action)=>{
            state.cart=state.cart.map((items )=>
               items.id===action.payload.id?items.qty>1?{...items,qty:items.qty-1}:items:items
            )
        }
    },
})

export const {addToCart,removeFromCart,incrementqty,decrementqty,deletecart} = CartSlice.actions
export default CartSlice.reducer