import {
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  GET_ALL_COMMENTS,
  GET_POST,
  GET_COMMENT
} from '../actions'
import { combineReducers } from 'redux'

function fetchPosts ( state = [] , action ) {
  let returnValue = []
  switch (action.type) {
    case GET_ALL_POSTS:
        returnValue = action.posts
        return returnValue
    default:
      return state;
  }
}

function fetchPostDetails ( state = [], action ) {
  switch (action.type) {
    case GET_POST:
      return action.post
    default:
      return state;
  }
}

export default combineReducers({
  fetchPosts,
  fetchPostDetails,
})
