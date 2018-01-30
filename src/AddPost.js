import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

class AddPost extends Component{
  render(){
    return(
      <div>
        <div className="search-books-input-wrapper">
          <DebounceInput
            type="text"
            placeholder="Write something here!"
            debounceTimeout={300}
          />
        </div>
      </div>
    )
  }
}

export default AddPost;
