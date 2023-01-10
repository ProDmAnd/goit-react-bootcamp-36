import { createSlice } from '@reduxjs/toolkit';
import { getProductsList } from './actions';

const products = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    error: '',
    list: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductsList.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getProductsList.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getProductsList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const productsReducer = products.reducer;
