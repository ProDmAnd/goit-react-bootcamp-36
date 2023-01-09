import { createSlice } from '@reduxjs/toolkit';
import { createTask, deleteTask, fetchTasks, toggleTask } from './operations';

const requestPending = state => {
  state.isLoading = true;
  state.error = '';
};

const requestFullfiled = state => {
  state.isLoading = false;
};

const requestRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const tasksOptions = createSlice({
  initialState: {
    isLoading: false,
    error: '',
    requestCount: 0,
  },
  name: 'tasksOptions',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, requestPending)
      .addCase(fetchTasks.fulfilled, requestFullfiled)
      .addCase(fetchTasks.rejected, requestRejected)
      .addCase(createTask.pending, requestPending)
      .addCase(createTask.fulfilled, requestFullfiled)
      .addCase(createTask.rejected, requestRejected)
      .addCase(deleteTask.pending, requestPending)
      .addCase(deleteTask.fulfilled, requestFullfiled)
      .addCase(deleteTask.rejected, requestRejected)
      .addCase(toggleTask.pending, requestPending)
      .addCase(toggleTask.fulfilled, requestFullfiled)
      .addCase(toggleTask.rejected, requestRejected);
  },
});

export const tasksOptionsReducers = tasksOptions.reducer;

const tasks = createSlice({
  initialState: [],
  name: 'tasks',
  reducers: {},
  extraReducers: {
    [fetchTasks.fulfilled]: (state, { payload }) => {
      return payload;
    },
    [createTask.fulfilled]: (state, { payload: task }) => {
      return [...state, task];
    },
    [deleteTask.fulfilled]: (state, { payload: taskId }) => {
      return state.filter(({ id }) => id !== taskId);
    },

    [toggleTask.fulfilled]: (state, { payload }) => {
      return state.map(task => (task.id === payload.id ? payload : task));
    },
  },
});

export const tasksReducer = tasks.reducer;
