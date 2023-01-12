import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { pokemonApi } from './pokemons';
import { productsApi } from './products/slice';
import reducer from './reducer';

const persistedReducer = persistReducer(
  { key: 'app', storage, whitelist: ['user'] },
  combineReducers(reducer)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(pokemonApi.middleware)
      .concat(productsApi.middleware),
});

export const persistor = persistStore(store);
