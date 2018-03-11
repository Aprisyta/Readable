import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComment } from '../actions'
import DropDownMenu from './DropDownMenu'

class Comments extends Component {

  state = {
    comment: [],
  }

  componentDidMount () {
    console.log("HI");
    const { commentID } = this.props
    this.props.getComment(commentID).then((res) => this.setState({
      comment: res.comment
    }))
  }

  render() {
    console.log(this.state.comment);
    const { comment } = this.state
    const { author, body, id, timestamp, voteScore } = this.state.comment
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
          <DropDownMenu context="Comment"/>
        </div>
        <div className="comment-body-holder">{body}</div>
      </div>
    )
  }
}

function mapStateToProps({ fetchCommentByID }) {
  return {
    comment: fetchCommentByID,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: (commentID) => dispatch(getComment(commentID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
