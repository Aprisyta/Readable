import * as PostsAPI from '../utils/PostsAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'
export const VOTE_ON_POST = 'VOTE_ON_POST'

export function recieveAllCategories (categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export const getAllCategories = () => dispatch => (
  PostsAPI
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
  PostsAPI
      .getAllPosts()
      .then(posts => dispatch(recieveAllPosts(posts)))
);

export function recievePost ( post ) {
  return {
    type: GET_POST,
    post,
  }
}

export const getPost = (id) => dispatch => (
  PostsAPI
      .getPostDetail(id)
      .then(post => dispatch(recievePost(post)))
);

export function recieveAllComments (comments) {
  return {
    type: GET_ALL_COMMENTS,
    comments
  }
}

export const getAllComments = (postID) => dispatch => (
  PostsAPI
      .getCommentsOnPost(postID)
      .then(comments => dispatch(recieveAllComments(comments)))
);

export function recieveComment ( comment ) {
  return {
    type: GET_COMMENT,
    comment
  }
}

export const getComment = (commentID) => dispatch => (
  PostsAPI
      .getCommentByID(commentID)
      .then(comment => dispatch(recieveComment(comment)))
);

export const postVoteOnPost = (postID, vote) => dispatch => (
  PostsAPI
      .voteOnPost(postID, vote)
      .then((post) => dispatch(recievePost(post)))
);
