import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/slice/ProductSlice'
import wishlistReducer from '../redux/slice/WishlistSlice'
import cartReducer from '../redux/slice/cartSlice'


const store=configureStore({
    reducer:{
        product:productReducer,
        Wishlist:wishlistReducer,
        cart:cartReducer

    }
})
export default store