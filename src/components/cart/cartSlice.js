import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const addedItem = action.payload;
      const calculateTotalPrice = (item) => item.price * item.quantity;

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
        let existingItem = state.cartItems[foundIndex];

        existingItem.quantity++;
        existingItem.totalPrice = calculateTotalPrice(existingItem);
      } else {
        // Add new item to cart state
        addedItem.quantity = 1;
        addedItem.totalPrice = calculateTotalPrice(addedItem);
        state.cartItems.push(addedItem);
      }
    },
    removeFromCart: (state) => console.log("Removed!"),
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
