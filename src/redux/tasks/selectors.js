import { createSelector } from '@reduxjs/toolkit';
import { filterStatus } from 'constants/filtres';
import { selectFilterStatus } from 'redux/filters/selectors';

export const selectTasksList = state => state.tasks.list;

export const selectVisilbeTasks = createSelector(
  [selectTasksList, selectFilterStatus],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case filterStatus.active:
        return tasks.filter(task => !task.completed);
      case filterStatus.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTasksCount = createSelector([selectTasksList], tasks => {
  return tasks.reduce(
    (acc, { completed }) =>
      completed
        ? { ...acc, completed: acc.completed + 1 }
        : { ...acc, active: acc.active + 1 },
    { active: 0, completed: 0 }
  );
});
