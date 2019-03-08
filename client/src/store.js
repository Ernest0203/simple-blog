import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import listing from './pages/latestPosts/reducers/index.js';
import post from './pages/post/reducers/index.js';
import general from './app/reducers/index.js';

const combinedReducers = combineReducers({
  listing,
  post,
  general
})

const store = createStore(
  combinedReducers, 
  applyMiddleware(thunk)
);

export default store;