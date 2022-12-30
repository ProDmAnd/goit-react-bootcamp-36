// import { combineReducers } from 'redux';
// import filters from './filters/reducer';
import { filtersReducer } from './filters/slice';
// import tasks from './tasks/reducer';
import { tasksReducer } from './tasks/slice';

// const rootReducer = (state, action) => {
//   return {
//     tasks: tasks(state?.tasks, action),
//     filters: filters(state?.filters, action),
//   };
// };

// export default combineReducers({ tasks, filters });

const root = { filters: filtersReducer, tasks: tasksReducer };

export default root;
