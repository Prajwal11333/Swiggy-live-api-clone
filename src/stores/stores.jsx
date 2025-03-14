import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./CartSlicer"

const stores = configureStore({
   reducer:{
   cartSlicer:cartReducer,
   } 
})

export default stores