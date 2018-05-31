import {
  apiGetCommentsOnPost,
  apiVoteOnComment,
  apiDeleteComment,
  apiAddComment,
  apiEditComment
} from '../utils/api'
import {
  GET_ALL_COMMENTS,
  VOTE_ON_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT
} from './actionTypes'

export function recieveAllComments (comments) {
  return {
    type: GET_ALL_COMMENTS,
    comments
  }
}

export const getAllComments = (postID) => dispatch => (
  apiGetCommentsOnPost(postID)
    .then(comments => dispatch(recieveAllComments(comments)))
);

export function voteComment ( comment ) {
  return {
    type: VOTE_ON_COMMENT,
    comment,
  }
}

export const postVoteOnComment = ( commentID, vote ) => dispatch => (
  apiVoteOnComment(commentID, vote)
    .then((comment) => dispatch(voteComment(comment)))
);

export function deleteComment (comment)  {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export const postToDeleteComment = ( commentID ) => dispatch => (
  apiDeleteComment(commentID)
    .then((comment) => dispatch(deleteComment(comment)))
);

export function addComment (comment)  {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const postAddComment = ( body ) => dispatch => (
  apiAddComment(body)
    .then((comment) => dispatch(addComment(comment)))
);

export function editComment( comment ) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export const putEditComment = (commentID, body) => dispatch => (
  apiEditComment(commentID, body)
    .then((comment) => dispatch(editComment(comment)))
);
