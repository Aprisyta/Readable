import React, { Component } from 'react';
import Post from './Post'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'
import AddPost from 'react-icons/lib/md/add'
import AddEditPost from './AddEditPost'

class NewsFeed extends Component {

  state = {
    addPostModalOpen: false,
    posts: [],
  }

  openAddPostModal = () => {
    this.setState({ addPostModalOpen: true})
  }

  closeAddPostModal = () => {
    this.setState({ addPostModalOpen: false })
  }

  componentDidMount() {
    this.props.getAllPosts().then(res => this.setState({
      posts: res.posts
    }))
  }

  componentWillReceiveProps(nextProps) {
    const { posts } = nextProps
    this.setState({
      posts,
    })
  }

  render() {
    const { addPostModalOpen, posts } = this.state
    console.log(posts);
    return (
      <div>
        {
          posts.map((post) => (
            <li className="post-list" key={post.id}>
              <Post id={post.id}/>
            </li>
          ))
        }
        <div className="open-add-post">
          <button
            className="icon-add"
            title="Add post"
            style={{border:'none', boxShadow:'none', padding:0}}
          >
            <AddPost
              className="icon-add"
              color="#fff"
              onClick={() => this.openAddPostModal()}
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
          <AddEditPost context="Add"/>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps({ fetchPosts, fetchCategories }) {
  return {
    posts: fetchPosts,
    categories: fetchCategories,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    getAllPosts: () => dispatch(getAllPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
