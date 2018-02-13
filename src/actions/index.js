import * as PostsAPI fro '../utils/PostsAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'

export func recieveAllCategories (categories) {
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

export func recieveAllPosts (posts) {
  return {
    type: GET_ALL_POSTS
  }
}

export const getAllPosts = () => dispatch => (
  PostsAPI
      .getAllPosts()
      .then(posts => dispatch(recieveAllPosts(categories)))
);

export func recievePost ( post ) {
  return {
    type: GET_POST,
    post,
  }
}

export const getPost = (id) => dispatch => (
  PostsAPI
      .getPostDetail()
      .then(post => dispatch(recievePost(post)))
);

export func recieveAllComments (comments) {
  return {
    type: GET_ALL_COMMENTS,
    comments
  }
}

export const getAllComments = (postID) => dispatch => (
  PostsAPI
      .getCommentsOnPost()
      .then(comments => dispatch(recieveAllComments(comments)))
);

export func recieveComment ({ commentID }) {
  return {
    type: GET_COMMENT,
    commentID
  }
}

export const getAllComments = (postID) => dispatch => (
  PostsAPI
      .getCommentsOnPost()
      .then(comments => dispatch(recieveAllComments(comments)))
);
