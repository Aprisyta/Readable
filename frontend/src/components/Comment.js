import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dateConverter } from '../utils/helper'
import LikeIcon from 'react-icons/lib/fa/thumbs-o-up'
import DislikeIcon from 'react-icons/lib/fa/thumbs-o-down'
import DropDownMenu from './DropDownMenu'
import '../style/Comment.css'
import { postVoteOnComment } from '../actions'

class Comment extends Component  {

  vote = (commentID, voteScore) => {
    this.props.postVoteOnComment( commentID, voteScore )
  }

  render() {
    const {
      id,
      timestamp,
      body,
      author,
      voteScore,
    } = this.props.comment
    const dateString = dateConverter(timestamp)
    return (
      <div className="comment-holder">
        <div className="comment-header">
          <span className="comment-author-holder">{author}</span>
          <span className="comment-date-holder">
            {` commented on ${dateString}`}
          </span>
          <DropDownMenu id={id} fromPost={false} commentBody={body}/>
        </div>
        <div className="comment-body-holder">{body}</div>
        <div className="comment-button-and-likes-display-holder">
          <div className="comment-button-container">
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
          </div>
          <div className="comment-vote-show">
            {`${voteScore} likes`}
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postVoteOnComment: (commentID, vote) => dispatch(postVoteOnComment(commentID, vote)),

  }
}

export default connect(null, mapDispatchToProps)(Comment)
