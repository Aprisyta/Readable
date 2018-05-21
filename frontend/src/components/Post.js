import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dateConverter } from '../utils/helper'
import LikeIcon from 'react-icons/lib/fa/thumbs-o-up'
import DislikeIcon from 'react-icons/lib/fa/thumbs-o-down'
import CommentIcon from 'react-icons/lib/fa/comments-o'
import '../style/Post.css'
import { postVoteOnPost, getPost, getAllComments } from '../actions'
import DropDownMenu from './DropDownMenu'
import { Link } from 'react-router-dom'

class Post extends Component {

  vote = (postID, voteScore) => {
    this.props.postVoteOnPost( postID, voteScore )
  }

  onPostViewRequest = (postID) => {
    const { getPost, getAllComments } = this.props
    getPost(postID)
    getAllComments(postID)
  }

  render () {
    const {
      id,
      author,
      body,
      category,
      commentCount,
      timestamp,
      title ,
      voteScore
    } = this.props.detail
    const dateString = dateConverter(timestamp)
    return (
      <div className="post-container">
        <div className="post-header">
          <span className="post-author-holder">{author}</span>
          <span className="post-date-and-topic-holder">
            {` posted on ${category} ${dateString}`}
          </span>
          <DropDownMenu id={id} fromPost={true}/>
        </div>
        <div className="post-title-holder">{title}</div>
        <div className="post-body-holder">{body}</div>
        <div className="post-vote-comment-show">
          {`${voteScore} likes || ${commentCount} comments`}
        </div>
        <div className="post-button-container">
          <button
            onClick={() => this.vote(id, "upVote")}
            title="Like"
          >
            <LikeIcon />
          </button>
          <button
            className="middle-button"
            onClick={() => this.vote(id, "downVote")}
            title="Dislike"
          >
            <DislikeIcon />
          </button>
          <Link to={`${category}/${id}`}>
            <button
              title="Comment"
              onClick={() => this.onPostViewRequest(id)}
            >
              <CommentIcon color='white'/>
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postVoteOnPost: (id, vote) => dispatch(postVoteOnPost(id, vote)),
    getPost: (id) => dispatch(getPost(id)),
    getAllComments: (id) => dispatch(getAllComments(id)),
  }
}

export default connect(null, mapDispatchToProps)(Post)
