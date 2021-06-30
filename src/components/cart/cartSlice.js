import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice to represent shopping cart state and its actions.
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const addedItem = { ...action.payload };

      // Search if the item we're wanting to add already exists in cart
      const itemExists = state.cartItems.find(
        (item) => item.name === addedItem.name
      );

      // Adds the new item to cart only if item isn't already in cart. Otherwise increases item quantity by 1.
      if (itemExists) {
        // Finds the existing item in cart state and increments its quantity by 1.
        const foundIndex = state.cartItems.findIndex(
          (x) => x.name === addedItem.name
        );
        const existingItem = state.cartItems[foundIndex];

        existingItem.quantity++;
      } else {
        // Add new item to cart state
        addedItem.quantity = 1;
        state.cartItems.push(addedItem);
      }
    },
    removeFromCart: (state, action) => {
      const item = { ...action.payload };

      const foundIndex = state.cartItems.findIndex((x) => x.name === item.name);
      state.cartItems.splice(foundIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

/**
 * Selector function to get the items in cart.
 *
 * @param {*} state state of cart
 * @returns an array of objects representing items in cart (sum of price per item included)
 */
export const selectCart = (state) => {
  const mapFunction = (item) => ({
    ...item,
    totalPrice: item.price * item.quantity,
  });
  return state.cart.cartItems.map(mapFunction);
};

/**
 * Selector function to get the total price of all items in the cart.
 *
 * @param {*} state state of cart
 * @returns the total price of all items in cart
 */
export const selectCartTotal = (state) => {
  const reduceFunction = (total, item) => total + item.price * item.quantity;
  return state.cart.cartItems.reduce(reduceFunction, 0);
};

export default cartSlice.reducer;
