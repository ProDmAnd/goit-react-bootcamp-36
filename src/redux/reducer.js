import { cartReducer } from './cart/slice';
import { filtersReducer } from './filters/slice';
import { productsApi, productsReducer } from './products/slice';
import { tasksApi, tasksReducer } from './tasks/slice';
import { userReducer } from './user/slice';

const root = {
  filters: filtersReducer,
  tasks: tasksReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
};

export default root;
