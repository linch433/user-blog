import { configureStore } from '@reduxjs/toolkit';
import { api } from './features/api.js';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});

setupListeners(store.dispatch);
