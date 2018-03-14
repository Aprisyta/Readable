import React, { Component } from 'react';
import './App.css';
// import AddPost from './AddPost'
import NewsFeed from './NewsFeed'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="fixed-container">
          <header className="App-header">
            <h1 className="App-title">Readable</h1>
          </header>
        </div>
        <NewsFeed />
      </div>
    );
  }
}

export default App;
