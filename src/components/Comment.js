import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComment, postVoteOnComment } from '../actions'
import DropDownMenu from './DropDownMenu'
import LikeIcon from 'react-icons/lib/fa/thumbs-o-up'
import DislikeIcon from 'react-icons/lib/fa/thumbs-o-down'

class Comment extends Component {

  state = {
    comment: [],
  }

  componentDidMount () {
    const { commentID } = this.props
    this.props.getComment(commentID).then((res) => this.setState({
      comment: res.comment
    }))
  }

  vote = (commentID, voteScore) => {
    this.props.postVoteOnComment( commentID, voteScore ).then((res) => {
      this.setState({ comment: res.comment })
    })
  }

  render() {
    const { comment } = this.state
    const { author, body, id, timestamp, voteScore } = this.state.comment
    const { postID } = this.props
    const date = new Date(timestamp)
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dt = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    return (
      <div className="comment-holder">
        <div className="comment-header">
          <span className="comment-author-holder">{author}</span>
          <span className="comment-date-holder">
            {` commented on ${month} ${dt}, ${year} at ${hour}:${min}`}
          </span>
          <DropDownMenu context="Comment" commentID={id} postID={postID}/>
        </div>
        <div className="comment-body-holder">{body}</div>
        <div className="comment-button-and-likes-display-holder">
          <div className="comment-button-container">
            <button
              onClick={() => this.vote(id, "upVote")}>
              <LikeIcon />
            </button>
            <button
              className="middle-button"
              onClick={() => this.vote(id, "downVote")}>
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

function mapStateToProps({ fetchCommentByID, fetchCommentsOnPostUsingPostID }) {
  return {
    comment: fetchCommentByID,
    comments: fetchCommentsOnPostUsingPostID,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: (commentID) => dispatch(getComment(commentID)),
    postVoteOnComment: (commentID, vote) => dispatch(postVoteOnComment(commentID, vote)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
