import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './Books/newBooks';

// Add reducer
const reducer = combineReducers({
  booksReducer,
});

// store function
const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
