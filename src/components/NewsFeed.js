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
  }

  openAddPostModal = () => {
    this.setState({ addPostModalOpen: true})
  }

  closeAddPostModal = () => {
    this.setState({ addPostModalOpen: false})
  }

  componentDidMount() {
    this.props.getAllPosts()

    // PostsAPI.getByCategory(`react`).then((posts) => {
    //   this.setState({
    //     posts,
    //   })
    // })

    // const editBody = {
    //   title: "Hi Post on react",
    //   body: "React is simple. "
    // }
    // const id = "8xf0y6ziyjabvozdd253nd"
    // PostsAPI.editPost(id, editBody)
    // PostsAPI.getAllPosts().then((posts) => {
    //   this.setState({
    //     posts,
    //   })
    // })
  }

  render() {
    const { posts } = this.props;
    const { addPostModalOpen } = this.state
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
          <AddEditPost />
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
