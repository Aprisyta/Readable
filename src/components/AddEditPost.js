import React, { Component } from 'react';
import { addPost, editPost } from '../actions'
import require from 'uuid'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { DebounceInput } from 'react-debounce-input'

class AddEditPost extends Component {

  state = {
    title: '',
    body: '',
  }

  componentDidMount () {
    const { context } = this.props
    if (context === "Edit") {
      const { author, category, title, body } = this.props.post
      this.setState({ author, category, title, body })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if(this.props.context === "Post") {
      const uuid = require('uuid/v1')
      const timestamp = Date.now()
      values.id = uuid
      values.timestamp = timestamp
      this.props.addPost(values)
    }
    else {
      const { id } = this.props.post
      this.props.editPost(id, values)
    }
  }

  render() {
    const { categories, context } = this.props
    const { title, body } = this.state
    let mode
    if( context === "Edit" ) { mode = "readOnly"}
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="author-select-container">
            <input
              className="write-author"
              name="author"
              type="text"
              placeholder="Name"
              defaultValue={this.props.post.author}
            />
            <select
                type="textarea"
                name="category"
                placeholder="Category"
                defaultValue={this.props.post.author}
            >
              {
                categories.map(category =>
                  <option key={category.name}>{category.name}</option>
                )
              }
            </select>
            <DebounceInput
              className="write-title"
              type="textarea"
              placeholder="Title"
              name="title"
              value={title}
              debounceTimeout={300}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
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

function mapStateToProps({ fetchCategories, fetchPostDetails }) {
  return {
    categories: fetchCategories,
    post: fetchPostDetails,
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    addPost: (body) => dispatch(addPost(body)),
    editPost: (postID, body) => dispatch(editPost(postID, body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditPost);
