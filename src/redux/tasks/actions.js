import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { actionFabric } from 'redux/actions';

// export const addTaskActionType = 'tasks/create';
// export const removeTaskActionType = 'tasks/remove';
// export const toggleTaskActionType = 'tasks/toggleCompleted';

// export const deleteTaskById = actionFabric(removeTaskActionType);

// const deleteTaskById = payload => ({
//   type: removeTaskActionType,
//   payload,
// });

// export const createTask = actionFabric(addTaskActionType);
// export const createTask = text => ({
//   type: addTaskActionType,
//   payload: {
//     id: nanoid(),
//     text,
//     completed: false,
//   },
// });
// export const toggleTaskById = actionFabric(toggleTaskActionType);

export const deleteTaskById = createAction('tasks/remove');
export const createTask = createAction('tasks/create', text => ({
  payload: {
    id: nanoid(),
    completed: false,
    text,
  },
}));
export const toggleTaskById = createAction('tasks/toggleCompleted');
