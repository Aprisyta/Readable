import * as api from '../utils/api'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'
export const VOTE_ON_POST = 'VOTE_ON_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export function recieveAllCategories (categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export const getAllCategories = () => dispatch => (
  api
    .getAllCategories()
    .then(categories => dispatch(recieveAllCategories(categories)))
);

export function recieveAllPosts (posts) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export const getAllPosts = () => dispatch => (
  api
    .getAllPosts()
    .then(posts => dispatch(recieveAllPosts(posts)))
);

export const getAllPostsInCategory = (category) => dispatch => (
  api
    .getPostsByCategory(category)
    .then(posts => dispatch(recieveAllPosts(posts)))
);

export function recievePost ( post ) {
  console.log(post);
  return {
    type: GET_POST,
    post,
  }
}

export const getPost = (postID) => dispatch => (
  api
    .getPostDetail(postID)
    .then(post => dispatch(recievePost(post)))
);

export const addPost = ( body ) => dispatch => (
  api
    .addPost(body)
    .then(() => dispatch(getAllPosts()))
);

export function votePost ( post ) {
  return {
    type: VOTE_ON_POST,
    post,
  }
}

export const postVoteOnPost = (postID, vote) => dispatch => (
  api
    .voteOnPost(postID, vote)
    .then(post => dispatch(votePost(post)))
);

export function editPost( post ) {
  return {
    type: EDIT_POST,
    post
  }
}

export const putEditPost = (postID, body) => dispatch => (
  api
    .editPost(postID, body)
    .then((post) => dispatch(editPost(post)))
);

export function deletePost (post)  {
  return {
    type: DELETE_POST,
    post
  }
}

export const postToDeletePost = (postID) => dispatch => (
  api
    .deletePost(postID)
    .then((post) => dispatch(deletePost(post)))
);

export function recieveAllComments (comments) {
  console.log(comments);
  return {
    type: GET_ALL_COMMENTS,
    comments
  }
}

export const getAllComments = (postID) => dispatch => (
  api
    .getCommentsOnPost(postID)
    .then(comments => dispatch(recieveAllComments(comments)))
);

export function voteComment ( comment ) {
  return {
    type: VOTE_ON_COMMENT,
    comment,
  }
}

export const postVoteOnComment = ( commentID, vote ) => dispatch => (
  api
    .voteOnComment(commentID, vote)
    .then((comment) => dispatch(voteComment(comment)))
);

export function deleteComment (comment)  {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export const postToDeleteComment = ( commentID ) => dispatch => (
  api
    .deleteComment(commentID)
    .then((comment) => dispatch(deleteComment(comment)))
);

export function addComment (comment)  {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const postAddComment = ( body ) => dispatch => (
  api
    .addComment(body)
    .then((comment) => dispatch(addComment(comment)))
);

export function editComment( comment ) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export const putEditComment = (commentID, body) => dispatch => (
  api
    .editComment(commentID, body)
    .then((comment) => dispatch(editComment(comment)))
);
