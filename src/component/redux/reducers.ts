import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import productReducer from './action/product';
import globalReducer from './action/global';
import contactreducer from "./action/contact";

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  product:productReducer,
  global:globalReducer,
  contact:contactreducer
});

export default rootReducer;
