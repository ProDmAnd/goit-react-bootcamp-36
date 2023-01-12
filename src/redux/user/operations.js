import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkApi) => {
    try {
      /** @type {Promise<{data: {email: string, password: string, token: string}}>} */
      const response = await new Promise(res => {
        setTimeout(
          () =>
            res({
              data: {
                email,
                password,
                token:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
              },
            }),
          1000
        );
      });
      return {
        email,
        password,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk('user/getCurrent', async (_, thunkApi) => {
  try {
    const token = thunkApi.getState().user.token;
    if (!token) {
      return thunkApi.rejectWithValue('');
    }
    axios.defaults.headers.common.Authorization = token;
    const user = await axios.get('user/current');
    return user.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }

})