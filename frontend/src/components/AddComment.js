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
                </div>
              : null
          }
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
