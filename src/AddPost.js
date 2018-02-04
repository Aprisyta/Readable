import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

class AddPost extends Component{
  render(){
    return(
      <div className="write-post-bar">
        <div className="write-post-bar-textarea">
          <DebounceInput
            className="write-post"
            type="textarea"
            placeholder="Write something here!"
            debounceTimeout={300}
          />
        </div>
        <div className="write-post-bar-button-container">
          <button value="post" className="write-post-bar-button">Post </button>
        </div>
      </div>
    )
  }
}

export default AddPost;
