// import { filterByStatus } from './actions';

import { createReducer } from '@reduxjs/toolkit';
import { filterStatus } from 'constants/filtres';
import { createTask } from 'redux/tasks/actions';
import { changeStatus } from './actions';

const initialState = {
  status: filterStatus.all,
};

// const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case filterByStatus:
//       return { ...state, status: payload };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

const filters = createReducer(initialState, {
  [changeStatus]: (state, { payload: status }) => ({ ...state, status }),
  [createTask]: () => ({ ...initialState }),
});

export default filters;

// store  = {
//   filters: {status: 'all'},
//   tasks: [],
// }

// this.setState({filters: {...this.store.filters, status: 'all'}});

// dispatch({...this.store, filters: {...this.store.filters, status: 'alll'}});
// dispatch({type: 'changeStatus', payload: 'all' });
