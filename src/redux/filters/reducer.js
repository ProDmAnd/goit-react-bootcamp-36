import { filterByStatus } from './actions';

const initialState = {
  status: 'all',
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case filterByStatus:
      return { ...state, status: payload };
    default:
      return state;
  }
};

export default filterReducer;
