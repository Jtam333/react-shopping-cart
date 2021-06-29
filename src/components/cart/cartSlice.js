import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.name === action.payload.name
      );

      if (itemExists) {
        console.log("Item already in cart.");
      } else {
        let newCartItem = action.payload
        newCartItem.quantity = 1
        state.cartItems.push(newCartItem);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
