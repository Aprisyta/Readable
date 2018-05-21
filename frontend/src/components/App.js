import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCategories, getAllPosts } from '../actions'
import { purple } from '../utils/colors'
import '../style/App.css'
import NewsFeed from './NewsFeed'
import PostDetailView from './PostDetailView'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    this.props.dispatch(getAllCategories());
    this.props.dispatch(getAllPosts());
  }

  render() {
    return (
      <div className="App">
        <div className="fixed-container" style={{backgroundColor: purple}}>
          <header className="App-header">
            <h1 className="App-title">Readable</h1>
          </header>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={NewsFeed}/>
            <Route exact path="/:category" component={NewsFeed} />
            <Route exact path='/:category/:id' component={PostDetailView}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null)(App);
