import React, { Component } from 'react';
import { addPost } from '../actions'
import require from 'uuid'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'

class AddEditPost extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    const uuid = require('uuid/v1')
    const timestamp = Date.now()
    values.id = uuid
    values.timestamp = timestamp
    this.props.addPost(values)
  }

  render(){
    const { categories } = this.props
    let header
    header = "Write something here!"
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="author-select-container">
            <input
              className="write-author"
              name="author"
              type="text"
              placeholder="Name"
              debounceTimeout={300}
            />
            <select
                type="textarea"
                name="category"
                placeholder="Category"
            >
              <option disabled selected value> -- select a category -- </option>
              {
                categories.map(category =>
                  <option key={category.name}>{category.name}</option>
                )
              }
            </select>
            <input
              className="write-title"
              type="textarea"
              placeholder="Title"
              name="title"
              debounceTimeout={300}
            />
          </div>
          <input
            className="write-post"
            type="textarea"
            placeholder="Body"
            name="body"
            debounceTimeout={300}
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

function mapStateToProps({ fetchCategories }) {
  return { categories: fetchCategories }
}

function mapDispatchToProps( dispatch ) {
  return {
    addPost: (body) => dispatch(addPost(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditPost);
