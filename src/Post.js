import React, { Component } from 'react';

class Post extends Component {
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

export default Post;
