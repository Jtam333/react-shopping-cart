import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state) => console.log('Added!')
  }
})

// Action creators are generated for each case reducer function
export const {addToCart} = cartSlice.actions

export default cartSlice.reducer