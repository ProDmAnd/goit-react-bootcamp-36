import { filtersReducer } from './filters/slice';
import { tasksOptionsReducers, tasksReducer } from './tasks/slice';

const root = {
  filters: filtersReducer,
  tasks: tasksReducer,
  tasksOptions: tasksOptionsReducers,
};

export default root;
