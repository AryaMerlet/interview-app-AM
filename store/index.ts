import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './feature/counter/counterSlice';
import {apiSlice} from './feature/api/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Listens to actions (pending, fulfilled, rejected), updates cache, tracks query metadata
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    // Intercepts query actions, makes fetch requests, dispatches success/failure actions and manages subscription and cache
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
