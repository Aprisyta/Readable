import {
  apiGetAllPosts,
  apiGetPostsByCategory,
  apiGetPostDetail,
  apiAddPost,
  apiVoteOnPost,
  apiEditPost,
  apiDeletePost
} from '../utils/api'
import {
  GET_ALL_POSTS,
  GET_POST,
  VOTE_ON_POST,
  DELETE_POST,
  EDIT_POST,
} from './actionTypes'

export function recieveAllPosts (posts) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export const getAllPosts = () => dispatch => (
  apiGetAllPosts()
    .then(posts => dispatch(recieveAllPosts(posts)))
);

export const getAllPostsInCategory = (category) => dispatch => (
  apiGetPostsByCategory(category)
    .then(posts => dispatch(recieveAllPosts(posts)))
);

export function recievePost ( post ) {
  return {
    type: GET_POST,
    post,
  }
}

export const getPost = (postID) => dispatch => (
  apiGetPostDetail(postID)
    .then(post => dispatch(recievePost(post)))
);

export const addPost = ( body ) => dispatch => (
  apiAddPost(body)
    .then(() => dispatch(getAllPosts()))
);

export function votePost ( post ) {
  return {
    type: VOTE_ON_POST,
    post,
  }
}

export const postVoteOnPost = (postID, vote) => dispatch => (
  apiVoteOnPost(postID, vote)
    .then(post => dispatch(votePost(post)))
);

export function editPost( post ) {
  return {
    type: EDIT_POST,
    post
  }
}

export const putEditPost = (postID, body) => dispatch => (
  apiEditPost(postID, body)
    .then((post) => dispatch(editPost(post)))
);

export function deletePost (post)  {
  return {
    type: DELETE_POST,
    post
  }
}

export const postToDeletePost = (postID) => dispatch => (
  apiDeletePost(postID)
    .then((post) => dispatch(deletePost(post)))
);
