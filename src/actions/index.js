export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
// export const VOTE_POST = 'VOTE_POST'

export func addPost ({ uuid, timestamp, title, body, author, category }) {
  return {
    type: ADD_POST,
    uuid,
    author,
    timestamp,
    category,
    title,
    body
  }
}

export func deletePost ({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}

export func addComment ({ uuid, timestamp, body, author, parentId }) {
  return {
    type: ADD_COMMENT,
    uuid,
    timestamp,
    body,
    author,
    parentId
  }
}

export func deleteComment ({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  }
}
