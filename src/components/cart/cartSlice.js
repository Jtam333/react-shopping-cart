import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const addedItem = action.payload;
      
      // Search if the item we're wanting to add already exists in cart
      const itemExists = state.cartItems.find(
        (item) => item.name === addedItem.name
      );

      // Adds the new item to cart only if item isn't already in cart. Otherwise increases item quantity by 1.
      if (itemExists) {
        // Finds the existing item in cart state and increments its quantity by 1.
        let foundIndex = state.cartItems.findIndex(
          (x) => x.name === addedItem.name
        );
        state.cartItems[foundIndex].quantity++;
      } else {
        // Add new item to cart state
        addedItem.quantity = 1;
        state.cartItems.push(addedItem);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
