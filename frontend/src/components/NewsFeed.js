import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import CategorySelector from './CategorySelector'
import '../style/NewsFeed.css'
import AddPostIcon from 'react-icons/lib/md/add'
import Modal from 'react-modal'
import AddEditPost from './AddEditPost'
import _ from 'lodash'
import LatestToOldest from 'react-icons/lib/fa/sort-numeric-asc'
import OldestToLatest from 'react-icons/lib/fa/sort-numeric-desc'
import { purple } from '../utils/colors'

class NewsFeed extends Component {

  state = {
    addPostModalOpen: false,
    sortOrder: 'td'
  }

  openAddPostModal = () => {
    this.setState({ addPostModalOpen: true})
  }

  closeAddPostModal = () => {
    this.setState({ addPostModalOpen: false })
  }

  sortPost(posts) {
		switch (this.state.sortOrder) {
			case "ta":
				return _.sortBy(posts, function(post) {
					return post.timestamp;
				});
			case "td":
				return _.sortBy(posts, function(post) {
					return post.timestamp;
				}).reverse();
			default:
				return posts;
		}
	}

  render () {
    const { posts } = this.props
    const { addPostModalOpen } = this.state
    console.log(this.state.sortOrder);
    return (
      <div>
        {
          this.sortPost(posts).map((post) => (
            <li className="post-list" key={post.id}>
              <Post detail={post}/>
            </li>
          ))
        }
        <CategorySelector history={this.props.history}/>
        <div className="open-add-post">
          <button
            className="icon"
            title="Add post"
            style={{border:'none', boxShadow:'none', padding:0}}
          >
            <AddPostIcon
              className="icon"
              color="#fff"
              onClick={() => this.openAddPostModal()}
            />
          </button>
        </div>
        <div className="sort-button">
          <button
            className="icon"
            title="Latest to Oldest Post"
            style={{border:'none', marginBottom: '10px', boxShadow:'none', padding:0, backgroundColor: purple}}
          >
            <LatestToOldest
              className="icon"
              color="#fff"
              style={{height: '40px', width: '40px'}}
              onClick={() => this.setState({ sortOrder: 'td'})}
            />
          </button>
          <button
            className="icon"
            title="Oldest to Latest Post"
            style={{border:'none', boxShadow:'none', padding:0, backgroundColor: purple}}
          >
            <OldestToLatest
              className="icon"
              color="#fff"
              style={{height: '40px', width: '40px'}}
              onClick={() => this.setState({ sortOrder: 'ta'})}
            />
          </button>
        </div>
        <Modal
          className='modal'
          overlayClassName='overlay'
          content='Modal'
          isOpen={addPostModalOpen}
          onRequestClose={this.closeAddPostModal}
          ariaHideApp={false}
        >
          <AddEditPost
            isAddPost={true}
            closeModal={this.closeAddPostModal}
          />
        </Modal>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts,
  }
}

export default connect(mapStateToProps)(NewsFeed)
