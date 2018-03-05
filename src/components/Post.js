import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions'
import LikeIcon from 'react-icons/lib/fa/thumbs-o-up'
import DislikeIcon from 'react-icons/lib/fa/thumbs-o-down'
import CommentIcon from 'react-icons/lib/fa/comments-o'

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
    console.log(this.state.post);
    const date = new Date(timestamp)
    console.log(date);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dt = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    return(
      <div className="post-container">
        <div className="post-header">
          <span className="post-author-holder">{author}</span>
          <span className="post-date-and-topic-holder">
            {` posted on ${category} dated ${month} ${dt}, ${year} at ${hour}:${min}`}
          </span>
        </div>
        <div className="post-title-holder">{title}</div>
        <div className="post-body-holder">{body}</div>
        <div className="post-vote-comment-show">
          {`${voteScore} likes || ${commentCount} comments`}
        </div>
        <div className="post-button-container">
          <button>
            <LikeIcon />
          </button>
          <button className="middle-button">
            <DislikeIcon />
          </button>
          <button>
            <CommentIcon />
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ fetchPostDetails }) {
  return { posts: fetchPostDetails }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (data) => dispatch(getPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
