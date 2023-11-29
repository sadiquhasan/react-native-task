// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favoritesReducer from "./favorites";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export default store;
