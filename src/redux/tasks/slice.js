import { createSlice } from '@reduxjs/toolkit';
import { userActions } from 'redux/user/slice';
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
  initialState: {
    list: [],
    isLoading: false,
    error: '',
  },
  name: 'tasks',
  reducers: {},
  extraReducers: {
    [fetchTasks.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
    [createTask.fulfilled]: (state, { payload: task }) => {
      state.list.push(task);
    },
    [deleteTask.fulfilled]: (state, { payload: taskId }) => {
      state.list = state.list.filter(({ id }) => id !== taskId);
    },

    [toggleTask.fulfilled]: (state, { payload }) => {
      for (let index = 0; index < state.list.length; index++) {
        if (state.list[index].id === payload.id) {
          state.list[index] = payload;
        }
      }
    },
    [userActions.logout]: state => {
      state.list = [];
    },
  },
});

export const tasksReducer = tasks.reducer;
