import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { selectSubreddit, fetchPosts, fetchPostsIfNeeded } from './redux/actions';
import rootReducer from './redux/reducer';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer, 
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,  
  )
);

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPostsIfNeeded('reactjs'))
  .then(() => console.log(store.getState()));
