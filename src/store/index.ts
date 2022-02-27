import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user.slice';


const rootReducer = combineReducers({
  userReducer
});


export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}


export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
