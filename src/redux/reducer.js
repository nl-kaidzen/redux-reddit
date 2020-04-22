import { combineReducers } from 'redux';
import { SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, RECEIVE_POSTS, REQUECT_POSTS } from './actionTypes';

const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT: return action.subreddit;
    default: return state;
  }
};

const postInitialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const posts = (state = postInitialState, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT: return {
      ...state,
      didInvalidate: true,
    };
    case REQUECT_POSTS: return {
      ...state,
      isFetching: true,
    };
    case RECEIVE_POSTS: return {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.recievedAt
    }
    default: return state;
  }
};

const postsBySubreddits = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT: 
    case RECEIVE_POSTS:
    case REQUECT_POSTS: return {
      ...state,
      [action.subreddit]: posts(state[action.subreddit], action)
    }
    default: return state;
  }
};

const rootReducer = combineReducers({
  postsBySubreddits,
  selectedSubreddit,
});

export default rootReducer;
