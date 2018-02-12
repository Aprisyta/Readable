export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'

export func getAllCategories () {
  return {
    type: GET_ALL_CATEGORIES
  }
}

export func getAllPosts () {
  return {
    type: GET_ALL_POSTS
  }
}

export func getPost ({ id }) {
  return {
    type: GET_POST,
    id,
  }
}

export func getAllComments ({ postID }) {
  return {
    type: GET_ALL_COMMENTS,
    postID
  }
}

export func getComment ({ commentID }) {
  return {
    type: GET_COMMENT,
    commentID
  }
}
