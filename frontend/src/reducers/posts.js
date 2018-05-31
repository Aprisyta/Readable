import {
  GET_ALL_POSTS,
  GET_POST,
  VOTE_ON_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/actionTypes'

export function posts ( state = [], action ) {
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

export function post ( state = [], action ) {
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
        return []
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
