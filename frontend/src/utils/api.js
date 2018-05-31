const api = process.env.REACT_APP_POSTS_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const apiGetAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const apiGetAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const apiGetPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const apiAddPost = (body) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

export const apiGetPostDetail = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

export const apiVoteOnPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const apiEditPost = (id, editedPost) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedPost)
  }).then(res => res.json())

export const apiDeletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE', headers
  }).then(res => res.json())

export const apiGetCommentsOnPost = (id) =>
  fetch(`${api}/posts/${id}/comments`, {headers})
    .then(res => res.json())

export const apiAddComment = (body) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

export const apiGetCommentByID = (id) =>
  fetch(`${api}/comments/${id}`, {headers})
    .then(res => res.json())

export const apiVoteOnComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const apiEditComment = (id, editedComment) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedComment)
  }).then(res => res.json())

export const apiDeleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE', headers
  }).then(res => res.json())
