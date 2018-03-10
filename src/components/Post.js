import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments'
import { getPost, postVoteOnPost, getAllComments } from '../actions'
import LikeIcon from 'react-icons/lib/fa/thumbs-o-up'
import DislikeIcon from 'react-icons/lib/fa/thumbs-o-down'
import CommentIcon from 'react-icons/lib/fa/comments-o'
import DropDownMenu from './DropDownMenu'

class Post extends Component {

  state = {
    post: [],
    showCommentsSection: false,
    comments: [],
  }

  componentDidMount () {
    const { id } = this.props
    this.props.getPost( id ).then((res) => {
      this.setState({
        post: res.post
      })
    })
  }

  showComments = (postID) => {
    this.props.getAllComments(postID).then((res) => this.setState({
      comments: res.comments,
      showCommentsSection: true
    }))
  }

  vote = (postID, voteScore) => {
    this.props.postVoteOnPost( postID, voteScore ).then((res) => {
      this.setState({ post: res.post })
    })
  }

  render(){
    const { id, author, body, category, commentCount, timestamp, title , voteScore } = this.state.post;
    const { getAllComments } = this.props
    const { showCommentsSection, comments } = this.state
    console.log(comments);
    const date = new Date(timestamp)
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dt = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    return(
      <div className="post-container">
        <p className="post-header">
          <span className="post-author-holder">{author}</span>
          <span className="post-date-and-topic-holder">
            {` posted on ${category} dated ${month} ${dt}, ${year} at ${hour}:${min}`}
          </span>
          <DropDownMenu />
        </p>
        <div className="post-title-holder">{title}</div>
        <div className="post-body-holder">{body}</div>
        <div className="post-vote-comment-show">
          {`${voteScore} likes || ${commentCount} comments`}
        </div>
        <div className="post-button-container">
          <button
            onClick={() => this.vote(id, "upVote")}>
            <LikeIcon />
          </button>
          <button
            className="middle-button"
            onClick={() => this.vote(id, "downVote")}>
            <DislikeIcon />
          </button>
          <button
            onClick={() => {
              this.showComments(id)
            }}>
            <CommentIcon />
          </button>
        </div>
        <div className="comment-section">
          {
            showCommentsSection === true
              ? comments.map((comment) => (
                  <Comments commentID={comment.id}/>
                ))
              : console.log("No comments")
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ fetchPostDetails, fetchCommentsOnPostUsingPostID }) {
  return {
    post: fetchPostDetails,
    comments: fetchCommentsOnPostUsingPostID,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (postID) => dispatch(getPost(postID)),
    postVoteOnPost: (postID, vote) => dispatch(postVoteOnPost(postID, vote)),
    getAllComments: (postID) => dispatch(getAllComments(postID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
