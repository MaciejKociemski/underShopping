import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.push(item);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = state => state.cart;

export default cartSlice.reducer;
