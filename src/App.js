import React, { Component } from 'react';
import './App.css';
import AddPost from './AddPost'
import Post from './Post'
import * as PostsAPI from './utils/PostsAPI'

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    PostsAPI.getAllCategories().then((posts) => {
      this.setState({
        categories,
      })
    })
  }

  render() {
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
