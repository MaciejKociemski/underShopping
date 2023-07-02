import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 9.99 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 14.99 },
  { id: 3, name: 'Product 3', description: 'Description 3', price: 19.99 },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = state => state.products;

export default productsSlice.reducer;
