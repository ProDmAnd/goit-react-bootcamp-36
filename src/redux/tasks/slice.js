import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasks = createSlice({
  initialState: [],
  name: 'tasks',
  reducers: {
    create: {
      prepare: text => ({ payload: { id: nanoid(), completed: false, text } }),
      reducer: (state, { payload: task }) => {
        // state.push(task);
        return [...state, task];
      },
    },
    delete: (state, { payload: taskId }) => {
      // const index = state.findIndex(({ id }) => id === taskId);
      // state.splice(index);
      return state.filter(({ id }) => id !== taskId);
    },
    toggle: (state, { payload: id }) => {
      //   for (let index = 0; index < state.length; index++) {
      //     const task = state[index];
      //     if (task.id === id) {
      //       state[index].completed = !task.completed;
      //       break;
      //     }
      //   }

      //   for (const task of state) {
      //     if (task.id === id) {
      //       task.completed = !task.completed;
      //       break;
      //     }
      //   }

      //   const index = state.findIndex(task => task.id === id);
      //   state.splice(index, 1, {
      //     ...state[index],
      //     completed: !state[index].completed,
      //   });
      return state.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    },
  },
});

export const tasksReducer = tasks.reducer;

export const tasksActions = tasks.actions;
