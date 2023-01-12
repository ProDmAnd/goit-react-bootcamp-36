import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
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

const tasks = createSlice({
  initialState: {
    list: [],
    isLoading: false,
    error: '',
  },
  name: 'tasks',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, requestPending)
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.list = payload;
        requestFullfiled(state, { payload });
      })
      .addCase(fetchTasks.rejected, requestRejected)
      .addCase(createTask.fulfilled, (state, { payload: task }) => {
        state.list.push(task);
        requestFullfiled(state, { payload: task });
      })
      .addCase(deleteTask.fulfilled, (state, { payload: taskId }) => {
        state.list = state.list.filter(({ id }) => id !== taskId);
        requestFullfiled(state, { payload: taskId });
      })
      .addCase(toggleTask.fulfilled, (state, { payload }) => {
        for (let index = 0; index < state.list.length; index++) {
          if (state.list[index].id === payload.id) {
            state.list[index] = payload;
          }
        }
        requestFullfiled(state, { payload });
      })
      .addCase(userActions.logout, state => {
        state.list = [];
      })
      .addCase(createTask.pending, requestPending)
      .addCase(createTask.rejected, requestRejected)
      .addCase(deleteTask.pending, requestPending)
      .addCase(deleteTask.rejected, requestRejected)
      .addCase(toggleTask.pending, requestPending)
      .addCase(toggleTask.rejected, requestRejected);
  },
});

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://63bb3a8432d17a50908aa204.mockapi.io/',
});

export const tasksApi = createApi({
  baseQuery,
  reducerPath: 'tasksApi',
  endpoints: builder => ({
    getList: builder.query({
      providesTags: ['getList'],
      query: () => `tasks-list`,
    }),
    create: builder.mutation({
      invalidatesTags: ['getList'],
      query: (text = '') => ({
        url: 'tasks-list',
        method: 'POST',
        body: { text },
      }),
    }),
    toggle: builder.mutation({
      invalidatesTags: ['getList'],
      query: ({ id, completed }) => ({
        url: `tasks-list/${id}`,
        method: 'PUT',
        body: { completed },
      }),
    }),
    delete: builder.mutation({
      invalidatesTags: ['getList'],
      query: id => ({
        url: `tasks-list/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetListQuery,
  useCreateMutation,
  useToggleMutation,
  useDeleteMutation,
} = tasksApi;

export const tasksReducer = tasks.reducer;
