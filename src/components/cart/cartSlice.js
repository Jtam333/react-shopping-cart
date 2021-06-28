import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalPrice: 0
  },
  reducers: {}
})

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions

export default cartSlice.reducer