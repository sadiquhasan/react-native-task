// productReducer.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addProduct: (state, action) => {
      if (state.cart.findIndex((res) => res.id === action.payload.id) !== -1) {
        const index = state.cart.findIndex(
          (res) => res.id === action.payload.id
        );
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex((res) => res.id === action.payload.id);
      if (state.cart[index].quantity >= 2) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
