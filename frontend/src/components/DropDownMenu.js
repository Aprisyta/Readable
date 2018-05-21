import React, {Component} from 'react'
import { connect } from 'react-redux';
import MultipleOption from 'react-icons/lib/fa/ellipsis-h'
import '../style/DropDownMenu.css'
import ReactDOM from 'react-dom'
import serializeForm from 'form-serialize'
import { DebounceInput } from 'react-debounce-input'

import {
  postToDeletePost,
  getPost,
  postToDeleteComment,
  putEditComment
} from '../actions'
import Modal from 'react-modal'
import AddEditPost from './AddEditPost'

class DropDownMenu extends Component {

  state = {
    isElipsisClicked: false,
    editPostModalOpen: false,
    editCommentModalOpen: false,
    commentBody: '',
  }

  componentDidMount() {
    if(!this.props.fromPost) {
      this.setState({
        commentBody: this.props.commentBody
      })
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({ isElipsisClicked: false })
    }
  }

  showDropDown = () => {
    this.setState((prevState) => ({
      isElipsisClicked: !prevState.isElipsisClicked,
    }))
  }

  openEditModal = () => {
    const { id, getPost, fromPost } = this.props
    if (fromPost) {
      getPost(id)
      this.setState({ editPostModalOpen: true })
    }
    else{
      this.setState({ editCommentModalOpen: true })
    }
    this.showDropDown()
  }

  closeEditModal = () => {
    this.setState({
      editPostModalOpen: false ,
      editCommentModalOpen: false,
    })
  }

  delete = () => {
    const { id, deletePost, fromPost, deleteComment } = this.props
    if (fromPost) {
      deletePost(id)
    }
    else {
      deleteComment(id)
    }
    this.showDropDown()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    const { id, editComment } = this.props
    editComment(id, values)
    this.closeEditModal()
  }

  render() {
    const {
      isElipsisClicked,
      editPostModalOpen,
      commentBody,
      editCommentModalOpen
    } = this.state
    return (
      <div className="ellipsis-holder">
        <span
          className="ellipsis-button-holder"
          onClick={this.showDropDown}
        >
          <MultipleOption
            height="2em"
            color="#6a1b9a"
          />
        </span>
        <span>
          {
            isElipsisClicked === true && (
              <div className="elipsis-content-holder">
                <ul>
                  <li
                    onClick={this.openEditModal}
                  >
                    Edit
                  </li>
                  <li
                    onClick={this.delete}
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )
          }
        </span>
        <Modal
          className='modal'
          overlayClassName='overlay'
          content='Modal'
          isOpen={editPostModalOpen}
          onRequestClose={this.closeEditModal}
          ariaHideApp={false}
        >
          <AddEditPost
            isAddPost={false}
            closeModal={this.closeEditModal}
          />
        </Modal>
        <Modal
          className='modal'
          overlayClassName='overlay'
          content='Modal'
          isOpen={editCommentModalOpen}
          onRequestClose={this.closeEditModal}
          ariaHideApp={false}
        >
          <form onSubmit={this.handleSubmit}>
            <DebounceInput
                className="write-post"
                value={commentBody}
                type="textarea"
                placeholder="Write your comment here!"
                name="body"
                debounceTimeout={300}
                onChange={(e) => this.setState({ commentBody: e.target.value })}
            />
            <button
              value="post"
              className="write-post-bar-button"
            >
              Comment
            </button>
          </form>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (postID) => dispatch(getPost(postID)),
    deletePost: (postID) => dispatch(postToDeletePost(postID)),
    deleteComment: (commentID) => dispatch(postToDeleteComment(commentID)),
    editComment: (commentID, body) => dispatch(putEditComment(commentID, body)),
  }
}

export default connect(null, mapDispatchToProps)(DropDownMenu)
