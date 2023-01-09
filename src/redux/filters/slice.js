import { createSlice } from '@reduxjs/toolkit';
import { filterStatus } from 'constants/filtres';
import { createTask, deleteTask } from 'redux/tasks/operations';

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
      .addCase(createTask.fulfilled, state => {
        state.status = filterStatus.all;
      })
      .addCase(deleteTask.fulfilled, state => {
        state.status = filterStatus.all;
      });
  },
});

export const filtersReducer = filters.reducer;

export const filtersActions = filters.actions;
