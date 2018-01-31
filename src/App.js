import React, { Component } from 'react';
import './App.css';
import AddPost from './AddPost'
import Post from './Post'

class App extends Component {
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
      </div>
    );
  }
}

export default App;
