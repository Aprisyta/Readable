import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
// import AddPost from './AddPost'
import NewsFeed from './NewsFeed'
import { getAllCategories } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.getAllCategories()
  }

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

function mapDispatchToProps(dispatch) {
  return {
    getAllCategories: () => dispatch(getAllCategories())
  }
}

export default connect(null, mapDispatchToProps)(App);
