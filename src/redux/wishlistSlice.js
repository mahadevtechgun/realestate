
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {

    // API  complete wishlist load
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },

    // Wishlist me property add
    addWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    // Wishlist  property remove
    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },

    // Complete wishlist clear
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const {
  setWishlist,
  addWishlist,
  removeWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
