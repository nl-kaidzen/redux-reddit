import { SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from './actionTypes';

export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  subreddit,
});

export const invalidateSubreddit = (subreddit) => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit,
});

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit,
});

export const recievePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map((child) => child.data),
  recievedAt: Date.now(),
})
