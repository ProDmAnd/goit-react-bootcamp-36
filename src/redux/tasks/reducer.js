import { createReducer, createSlice } from '@reduxjs/toolkit';
import {
  // addTaskActionType,
  // removeTaskActionType,
  // toggleTaskActionType,
  createTask,
  deleteTaskById,
  toggleTaskById,
} from './actions';

// const initialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case addTaskActionType:
//       return [...state, payload];
//     case removeTaskActionType:
//       return state.filter(({ id }) => id !== payload);
//     case toggleTaskActionType:
//       return state.map(task =>
//         task.id === payload ? { ...task, completed: !task.completed } : task
//       );
//     default:
//       return state;
//   }
// };

// With Create Reducer
/*
const tasks = createReducer([], {
  [createTask]: (state, { payload: task }) => [...state, task],
  [deleteTaskById]: (state, { payload: taskId }) =>
    state.filter(({ id }) => id !== taskId),
  [toggleTaskById]: (state, { payload: id }) =>
    state.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
});

export default tasks;
*/

// With create Slice
