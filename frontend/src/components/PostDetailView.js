import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dateConverter } from '../utils/helper'
import DropDownMenu from './DropDownMenu'
import LikeIcon from 'react-icons/lib/fa/thumbs-o-up'
import DislikeIcon from 'react-icons/lib/fa/thumbs-o-down'
import '../style/PostDetailView.css'
import { postVoteOnPost, postAddComment } from '../actions'
import serializeForm from 'form-serialize'
import Comment from './Comment'
import require from 'uuid'
import { DebounceInput } from 'react-debounce-input'

class CategorySelector extends Component {

  state = {
    commentAuthor: '',
    commentBody: '',
  }

  vote = (postID, voteScore) => {
    this.props.postVoteOnPost( postID, voteScore )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    const  parentId  = this.props.post.id
    const { addComment } = this.props
    const uuid = require('uuid/v1')
    const timestamp = Date.now()
    values.id = uuid
    values.timestamp = timestamp
    values.parentId = parentId
    addComment(values)
    this.setState({ commentAuthor: '', commentBody: '' })
  }

  render() {
    const {
      id,
      author,
      body,
      category,
      commentCount,
      timestamp,
      title ,
      voteScore,
      deleted,
    } = this.props.post
    if(deleted) {
      return (
        <div>Post has been deleted</div>
      )
    }
    const { comments } = this.props
    const { commentAuthor, commentBody } = this.state
    console.log(this.props.post);
    const dateString = dateConverter(timestamp)
    return(
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
            className="post-view-button"
            onClick={() => this.vote(id, "upVote")}
            title="Like"
          >
            <LikeIcon />
          </button>
          <button
            className="post-view-button"
            onClick={() => this.vote(id, "downVote")}
            title="Dislike"
          >
            <DislikeIcon />
          </button>
        </div>
        <div className="comment-section">
          {
            comments.map((comment) => (
              <Comment comment={comment} key={comment.id}/>
            ))
          }
        </div>
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="comment-holder"
          >
            <DebounceInput
              className="write-author-of-comment"
              style={{width: '29%'}}
              value={commentAuthor}
              name="author"
              type="text"
              placeholder="Name"
              debounceTimeout={300}
              onChange={(e) => this.setState({ commentAuthor: e.target.value })}
            />
          <DebounceInput
              className="write-comment"
              style={{width: '55%', float: 'right'}}
              value={commentBody}
              type="textarea"
              placeholder="Write your comment here!"
              name="body"
              debounceTimeout={300}
              onChange={(e) => this.setState({ commentBody: e.target.value })}
            />
            <button
              value="post"
              style={{margin: '3% 35%'}}
            >
              Comment
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ post, comments }) {
  return { post, comments }
}

function mapDispatchToProps(dispatch) {
  return {
    postVoteOnPost: (postID, voteScore) => dispatch(postVoteOnPost( postID, voteScore )),
    addComment: (body) => dispatch(postAddComment(body))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector)
