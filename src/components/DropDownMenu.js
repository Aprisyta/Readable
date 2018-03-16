import React, {Component} from 'react'
import { connect } from 'react-redux';
import MultipleOption from 'react-icons/lib/fa/ellipsis-h'
import { postToDeletePost, postToDeleteComment, getPost } from '../actions'
import Modal from 'react-modal'
import AddEditPost from './AddEditPost'

class DropDownMenu extends Component {

  state = {
    isElipsisClicked: false,
    editPostModalOpen: false,
  }

  edit = (postID, commentID, context) => {
    if(context === "Post") {
      this.openEditPostModal(postID)
    }
  }

  openEditPostModal = (postID) => {
    this.props.getPost(postID)
    this.setState({ editPostModalOpen: true })
    this.showDropDown()
  }

  closeEditPostModal = () => {
    this.setState({ editPostModalOpen: false })
  }

  showDropDown = () => {
    const { isElipsisClicked } = this.state

    isElipsisClicked === true
      ? this.setState({ isElipsisClicked: false })
      : this.setState({ isElipsisClicked: true })
  }

  remove = (postID, commentID, context) => {
    if(context === "Post") {
      this.props.deletePost(postID)
    }
    else {
      this.props.deleteComment(commentID, postID)
    }
  }

  render() {
    const { isElipsisClicked, editPostModalOpen } = this.state
    const { context, postID, commentID } = this.props
    let bgColor
    context === "Post"
      ? bgColor = "#fff"
      : bgColor = "#f5f5f5"
    return (
      <div className="ellipsis-holder">
        <span
          className="ellipsis-button-holder"
          onClick={this.showDropDown}
          style={{backgroundColor: `${bgColor}`}}
        >
          <MultipleOption
            height="2em"
            color="#6a1b9a"
          />
        </span>
        <span>
          {
            isElipsisClicked === true
              ? <div className="dropdown-content-holder">
                  <ul>
                    <li
                      onClick={() => this.edit(postID, commentID, context)}
                    >
                      Edit {context}
                    </li>
                    <li
                      onClick={() => this.remove(postID, commentID, context)}
                    >
                      Delete {context}
                    </li>
                  </ul>
                </div>
              : null
          }
        </span>
        <Modal
          className='modal'
          overlayClassName='overlay'
          content='Modal'
          isOpen={editPostModalOpen}
          onRequestClose={this.closeEditPostModal}
          ariaHideApp={false}
        >
          <AddEditPost context="Edit"/>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (postID) => dispatch(getPost(postID)),
    deletePost: (postID) => dispatch(postToDeletePost(postID)),
    deleteComment: (commentID, postID) => dispatch(postToDeleteComment(commentID, postID))
  }
}

export default connect(null, mapDispatchToProps)(DropDownMenu);
