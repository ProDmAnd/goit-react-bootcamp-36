import { cartReducer } from './cart/slice';
import { filtersReducer } from './filters/slice';
import { productsReducer } from './products/slice';
import { tasksOptionsReducers, tasksReducer } from './tasks/slice';
import { userReducer } from './user/slice';

const root = {
  filters: filtersReducer,
  tasks: tasksReducer,
  tasksOptions: tasksOptionsReducers,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
};

export default root;
