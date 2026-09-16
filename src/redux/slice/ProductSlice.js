import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const result=await axios.get('https://dummyjson.com/products')
    return result.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        loading:false,
        allProducts:[],
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true
            state.allProducts=[]
            state.error=""
        })
         builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allProducts=action.payload
            state.error=""
        })
         builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.allProducts=[]
            state.error="API call failed!"
        })
    }
})

export default productSlice.reducer