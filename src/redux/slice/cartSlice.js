import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            let existingProducts = state.find(pro => pro.id == action.payload.id)
            if (existingProducts) {
                existingProducts.quantity++
                existingProducts.totalPrice = existingProducts.quantity * existingProducts.price
            } else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        },
        removeFromeCart: (state, action) => {
            return state.filter(item =>
                item.id !== action.payload
            )
        },
        incrementQuantity: (state, action) => {
            let existingProducts = state.find(pro => pro.id == action.payload)
            existingProducts.quantity++
            existingProducts.totalPrice = existingProducts.quantity * existingProducts.price

        },
        decrementQuantity: (state, action) => {
            let existingProducts = state.find(pro => pro.id == action.payload)
            existingProducts.quantity--
            existingProducts.totalPrice = existingProducts.quantity * existingProducts.price

        },
        emptyCart:(state)=>{
            return []
        }
    }
})

export const { addToCart, removeFromeCart, incrementQuantity, decrementQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer