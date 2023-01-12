// @ts-check
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { loginUser } from './operations';

const caseReducer = (state, action) => {
  switch (action.type) {
    case 'fetchRequest':
      break;

    default:
      break;
  }
};

// objectReducer[action.type](state, action);
// const fetchAction = createAction('fetch');

// const reducer = createReducer(
//   { loading: false },
//   {
//     [fetchAction]: (state, action) => {
//       return { loading: true };
//     },
//   }
// );

const user = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    /**
     * Added token to user slice
     * @param state
     * @param {{ payload: string }} action
     */
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

