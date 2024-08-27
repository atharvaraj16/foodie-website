import { createSlice } from "@reduxjs/toolkit";

const Searchslice=createSlice({
    name:"Search",
    initialState:{
        Search:"",
    },
    reducers:{
        SetSearch:(state,action)=>{
            state.Search=action.payload;
        }
    }
})
export const {SetSearch} = Searchslice.actions;
export default Searchslice.reducer;
