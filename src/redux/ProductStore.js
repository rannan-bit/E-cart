import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/slice/ProductSlice'

const store=configureStore({
    reducer:{
        product:productReducer
    }
})
export default store