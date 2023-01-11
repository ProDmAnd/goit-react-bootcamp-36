import { createSlice } from '@reduxjs/toolkit';
import { userActions } from 'redux/user/slice';

const cart = createSlice({
  name: 'cart',
  initialState: {
    list: {},
  },
  reducers: {
    add: (state, { payload }) => {
      if (!state.list[payload.id]) {
        state.list[payload.id] = [payload];
        return;
      }
      state.list[payload.id].push(payload);
    },
    remove: (state, { payload }) => {
      if (state.list[payload].length > 1) {
        state.list[payload].pop();
        return;
      }
      delete state.list[payload];
    },
  },
  extraReducers: builder => {
    builder.addCase(userActions.logout, state => {
      state.list = {};
    });
  },
});

export const cartReducer = cart.reducer;
export const cartActions = cart.actions;
