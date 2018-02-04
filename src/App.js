import React, { Component } from 'react';
import './App.css';
import AddPost from './AddPost'
import Post from './Post'
import * as PostsAPI from './utils/PostsAPI'

class App extends Component {

  state = {
    categories: [],
    posts: [],
    post: [],
    comments: []
  }

  componentDidMount() {
    // PostsAPI.getAllCategories().then((categories) => {
    //   this.setState({
    //     categories,
    //   })
    // })

    // PostsAPI.getByCategory(`react`).then((posts) => {
    //   this.setState({
    //     posts,
    //   })
    // })

    // PostsAPI.getAllPosts().then((posts) => {
    //   this.setState({
    //     posts,
    //   })
    // })

    // const body = {
    //   id : "uguyh789tdd67r6",
    //   timestamp : Date.now(),
    //   title : "Yo new post",
    //   body : "Hi post 3",
    //   author : "Apri",
    //   category : "udacity",
    // }
    // PostsAPI.addPost(body)

    // const id = "8xf0y6ziyjabvozdd253nd"
    // PostsAPI.getPostDetail(id).then((post) => {
    //   this.setState({
    //     post,
    //   })
    // })

    // const id = "8xf0y6ziyjabvozdd253nd"
    // const str = "upVote"
    // PostsAPI.voteOnPost(id, str)
    // PostsAPI.getAllPosts().then((posts) => {
    //   this.setState({
    //     posts,
    //   })
    // })

    // const editBody = {
    //   title: "Hi Post on react",
    //   body: "React is simple. "
    // }
    // const id = "8xf0y6ziyjabvozdd253nd"
    // PostsAPI.editPost(id, editBody)
    // PostsAPI.getAllPosts().then((posts) => {
    //   this.setState({
    //     posts,
    //   })
    // })

    // const id = "6ni6ok3ym7mf1p33lnez"
    // PostsAPI.deletePost(id)

    // const id = "8xf0y6ziyjabvozdd253nd"
    // PostsAPI.getCommentsOnPost(id).then((comments) => {
    //   this.setState({ comments })
    // })


  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <div className="fixed-container">
          <header className="App-header">
            <h1 className="App-title">Readable</h1>
          </header>
          <AddPost />
        </div>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default App;
