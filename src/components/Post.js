import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions'

class Post extends Component {
  state = {
    post: []
  }

  componentDidMount () {
    const { id } = this.props
    this.props.getPost( id ).then((res) => {
        this.setState({
          post: res.post
      })
    })
  }

  render(){
    const { author, body, category, commentCount, timestamp, title , voteScore } = this.state.post;
    // let d = new Date(timestamp)
    return(
      <div className="post-container">
        <div className="post-name-holder">{author}</div>
        <div>{new Date(timestamp)}</div>
        <div>{body}</div>
      </div>
    )
  }
}

function mapStateToProps({ fetchPostDetails }) {
  return { post: fetchPostDetails }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (data) => dispatch(getPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
