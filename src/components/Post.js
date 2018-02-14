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
    return(
      <div className="post-container">
        <div className="post-name-holder">Name</div>
        <div>Time</div>
        <div>Post</div>
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
