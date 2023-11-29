// productReducer.js
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "Favorite",
  initialState: { favorite: [] },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const index = state.favorite.findIndex(
        (res) => res.id === action.payload.id
      );
      state.favorite.splice(index, 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
