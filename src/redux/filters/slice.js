import { createSlice } from '@reduxjs/toolkit';
import { filterStatus } from 'constants/filtres';
import { tasksActions } from 'redux/tasks/slice';

const filters = createSlice({
  initialState: { status: filterStatus.all, order: 'asc' },
  name: 'filters',
  reducers: {
    changeStatus(state, { payload }) {
      state.status = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(tasksActions.create, state => {
        state.status = filterStatus.all;
      })
      .addCase(tasksActions.delete, state => {
        state.status = filterStatus.all;
      });
  },
  // extraReducers: {
  //   [tasksActions.create]: state => {
  //     state.status = filterStatus.all;
  //   },
  // },
});

export const filtersReducer = filters.reducer;

export const filtersActions = filters.actions;

const slice = createSlice({
  initialState: 'all',
  name: 'status',
  reducers: {
    changeStatus() {},
  },
});

const arr = [1, 2, 3, 4, 5, 6].map((value, ind) => {
  if (value > 3) {
    return { value, ind };
  }
  return ('as123');
});
