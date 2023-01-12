import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getProductsList } from './actions';

export const STATUS = Object.freeze({
  idle: 'idle',
  pending: 'pending',
  fulfilled: 'fullfiled',
  rejected: 'rejected',
})

const products = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    error: '',
    list: [],
    status: STATUS.idle
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductsList.pending, state => {
        state.loading = true;
        state.error = '';
        state.status = STATUS.pending;
      })
      .addCase(getProductsList.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
        state.status = STATUS.fulfilled;
      })
      .addCase(getProductsList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUS.rejected;
      });
  },
});

export const productsReducer = products.reducer;

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://makeup-api.herokuapp.com/api/v1',
  }),
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  endpoints: builder => ({
    getProducts: builder.query({
      query: params => ({ url: `products.json`, params }),
    }),
    createProduct: builder.mutation({
      invalidatesTags: ['Products'],
      query: (params) => ({url: ''})
    })
  }),
});

export const { useGetProductsQuery, useUpdateListMutation } = productsApi;