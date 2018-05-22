import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost, putEditPost } from '../actions'
import require from 'uuid'
import serializeForm from 'form-serialize'
import '../style/AddEditPost.css'
import { DebounceInput } from 'react-debounce-input'

class AddEditPost extends Component {

  state = {
    completeValues: true,
    title: '',
    body: '',
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.isAddPost) {
      const { title, body } = nextProps.post
      this.setState({ title, body })
    }
  }

  handleSubmit = (e) => {
    const { addPost, closeModal, isAddPost, post, editPost } = this.props
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if(isAddPost && typeof values.body === 'undefined') {
      this.setState({ completeValues: false })
      return
    }
    if(typeof values.body === 'undefined' || typeof values.title === 'undefined') {
      this.setState({ completeValues: false })
      return
    }
    if(isAddPost) {
      const uuid = require('uuid/v1')
      const timestamp = Date.now()
      values.id = uuid
      values.timestamp = timestamp
      addPost(values)
    }
    else {
      editPost(post.id, values)
    }
    closeModal()
  }

  render() {
    const { isAddPost, categories } = this.props
    const { title, body, completeValues } = this.state
    return (
      <div>
        {
          completeValues
            ? null
            : <div className="message">All fields are mandatory</div>
        }
        <form onSubmit={this.handleSubmit}>
          {
            isAddPost && (
              <div className="author-select-container">
                <input
                  className="write-author"
                  name="author"
                  type="text"
                  placeholder="Name"
                />
                <select
                  type="textarea"
                  name="category"
                  placeholder="Category"
                >
                  {
                    categories.map(category =>
                      category.name === 'all'
                        ? null
                        : <option key={category.name}>{category.name}</option>
                    )
                  }
                </select>
              </div>
            )
          }
          <DebounceInput
            className="write-title"
            type="textarea"
            placeholder="Title"
            name="title"
            value={title}
            debounceTimeout={300}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <DebounceInput
            className="write-post"
            type="textarea"
            placeholder="Body"
            name="body"
            value={body}
            debounceTimeout={300}
            onChange={(e) => this.setState({ body: e.target.value })}
          />
          <button
            value="post"
            className="write-post-bar-button"
          >
            Post
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ categories, post }) {
  return { categories, post }
}

function mapDispatchToProps( dispatch ) {
  return {
    addPost: (body) => dispatch(addPost(body)),
    editPost: (postID, body) => dispatch(putEditPost(postID, body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditPost)
