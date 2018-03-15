import {
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  GET_ALL_COMMENTS,
  GET_POST,
  GET_COMMENT,
} from '../actions'
import { combineReducers } from 'redux'

function fetchCategories ( state = [] , action ) {
  let returnValue = []
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      returnValue = action.categories
      return returnValue
    default:
      return state
  }
}

function fetchPosts ( state = [] , action ) {
  let returnValue = []
  switch (action.type) {
    case GET_ALL_POSTS:
      returnValue = action.posts
      return returnValue
    default:
      return state
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
  fetchCategories,
  fetchPosts,
  fetchPostDetails,
  fetchCommentsOnPostUsingPostID,
  fetchCommentByID,
})
