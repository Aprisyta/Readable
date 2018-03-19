import React, { Component } from 'react';

class AddComment extends Component {

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {
            context === "Add"
              ? <div className="author-select-container">
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
                        <option key={category.name}>{category.name}</option>
                      )
                    }
                  </select>
                </div>
              : null
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

export default AddComment;
