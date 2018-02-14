import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions'

class Post extends Component {
  state = {
    post: []
  }

  componentDidMount () {
    console.log("Within post");
    const { id } = this.props.id
    if(this.props.id) {
      // console.log(this.props.id);
      this.props.getPost(id).then((post) => this.setState({
        post,
      }))
    }
  }

  render(){
    const { post } = this.state.post
    console.log(post);
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
    getPost: (id) => dispatch(getPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
