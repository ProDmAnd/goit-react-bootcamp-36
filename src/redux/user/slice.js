import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './operations';

const user = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    addToken(state, { payload }) {
      state.token = payload;
    },
    logout(state, { payload }) {
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.token = payload.token;
    });
  },
});

export const userReducer = user.reducer;

export const userActions = user.actions;
