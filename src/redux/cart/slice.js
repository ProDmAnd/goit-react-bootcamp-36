import { createSlice } from '@reduxjs/toolkit';

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
});

export const cartReducer = cart.reducer;
export const cartActions = cart.actions;
