import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user.slice';
import { postAPI } from './services/post.service';


const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});


export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(postAPI.middleware);
    }
  })
}


export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
