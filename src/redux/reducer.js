import { combineReducers } from 'redux';
import filters from './filters/reducer';
import tasks from './tasks/reducer';

const rootReducer = (state, action) => {
  return {
    tasks: tasks(state?.tasks, action),
    filters: filters(state?.filters, action),
  };
};

export default combineReducers({ tasks, filters });
