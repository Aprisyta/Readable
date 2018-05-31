import {
  GET_ALL_COMMENTS,
  VOTE_ON_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT
} from '../actions/actionTypes'

export function comments ( state = [], action ) {
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
