import {
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  GET_POST,
  VOTE_ON_POST,
  DELETE_POST,
  EDIT_POST,
  GET_ALL_COMMENTS,
  VOTE_ON_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
} from '../actions'
import { combineReducers } from 'redux'

function categories ( state = [] , action ) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

function posts ( state = [], action ) {
  let returnVal
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.posts
    case VOTE_ON_POST:
      returnVal = state.map((post) =>
                    post.id === action.post.id
                      ? {...action.post}
                      : post
                  )
      return returnVal
    case DELETE_POST:
      returnVal = state.filter((post) =>
                    post.id !== action.post.id
                  )
      return returnVal
    case EDIT_POST:
      returnVal = state.map((post) =>
                    post.id === action.post.id
                      ? {...action.post}
                      : post
                  )
      return returnVal
    case ADD_COMMENT:
      returnVal = state.map((post) =>
                    post.id === action.comment.parentId
                      ? Object.assign({}, post, {commentCount: post.commentCount+1})
                      : post
                  )
      return returnVal
    case DELETE_COMMENT:
      returnVal = state.map((post) =>
                    post.id === action.comment.parentId
                      ? Object.assign({}, post, {commentCount: post.commentCount - 1})
                      : post
                  )
      return returnVal
    default:
      return state
  }
}

function post ( state = [], action ) {
  switch (action.type) {
    case GET_POST:
      return action.post
    case VOTE_ON_POST:
      if(state.id === action.post.id)
        return {...action.post}
      else
        return state
    case EDIT_POST:
      if(state.id === action.post.id)
        return {...action.post}
      break
    case DELETE_POST:
      if(state.id === action.post.id) {
        let rt = {
          ...state,
          deleted: !state.deleted
        }
        return rt
      }
      else
        return state
    case ADD_COMMENT:
      if(state.id === action.comment.parentId) {
        const returnVal = Object.assign({}, state, {commentCount: state.commentCount + 1})
        return returnVal
      }
      return state
    case DELETE_COMMENT:
    if(state.id === action.comment.parentId) {
      const returnVal = Object.assign({}, state, {commentCount: state.commentCount - 1})
      return returnVal
    }
    return state
    default:
      return state
  }
}

function comments ( state = [], action ) {
  let returnVal
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return action.comments
    case VOTE_ON_COMMENT:
      returnVal = state.map((comment) =>
                    comment.id === action.comment.id
                      ? {...action.comment}
                      : comment
                  )
      return returnVal
    case DELETE_COMMENT:
      returnVal = state.filter((comment) =>
                    comment.id !== action.comment.id
                  )
      return returnVal
    case ADD_COMMENT:
      returnVal = state.concat(action.comment)
      return returnVal
    case EDIT_COMMENT:
      returnVal = state.map((comment) =>
                    comment.id === action.comment.id
                      ? {...action.comment}
                      : comment
                  )
      return returnVal
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  post,
  comments,
})
