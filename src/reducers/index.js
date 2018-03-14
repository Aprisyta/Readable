import {
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  GET_ALL_COMMENTS,
  GET_POST,
  GET_COMMENT,
  VOTE_ON_POST,
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
  let returnValue = []
  switch (action.type) {
    case GET_POST:
      returnValue = action.post
      return returnValue
    default:
      return state;
  }
}

function fetchCommentsOnPostUsingPostID ( state = [], action ) {
  let returnValue = []
  switch (action.type) {
    case GET_ALL_COMMENTS:
      returnValue = action.comments
      return returnValue
    default:
      return state;
  }
}

function fetchCommentByID ( state = [], action ) {
  switch (action.type) {
    case GET_COMMENT:
      return action.comment
    default:
      return state
  }
}

export default combineReducers({
  fetchPosts,
  fetchPostDetails,
  fetchCommentsOnPostUsingPostID,
  fetchCommentByID,
})
