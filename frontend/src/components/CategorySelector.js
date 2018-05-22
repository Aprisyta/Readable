import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilterIcon from 'react-icons/lib/fa/filter'
import { purple } from '../utils/colors'
import '../style/CategorySelector.css'
import ReactDOM from 'react-dom'
import { getAllPostsInCategory, getAllPosts } from '../actions'

class CategorySelector extends Component {

  state = {
    isCategoryClicked: false,
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({ isCategoryClicked: false })
    }
  }

  onFilterClick = () => {
    this.setState((prevState) => ({
      isCategoryClicked: !prevState.isCategoryClicked
    }))
  }

  categoryClick = (category) => {
    this.props.history.push(category)
    category === '/'
      ? this.props.dispatch(getAllPosts())
      : this.props.dispatch(getAllPostsInCategory(category))
    this.setState({ isCategoryClicked: false })
  }

  render() {
    const { categories } = this.props
    const { isCategoryClicked } = this.state
    if(categories.length > 0 && !categories[categories.length] && categories[categories.length - 1].name !== 'all') {
      categories.push({'name': 'all', 'path': '/'})
    }
    return (
      <div className="categorise-post">
        {
          isCategoryClicked === true && (
            <div className="dropdown-content-holder">
              {
                categories.map((category) => (
                  <li
                    key={category.name}
                    onClick={() => this.categoryClick(category.path)}
                  >
                    {category.name}
                  </li>
                ))
              }
            </div>
          )
        }
        <button
          className="filter-category"
          title="Categories"
          style={{border:'none', boxShadow:'none', padding:0, backgroundColor: purple}}
        >
          <FilterIcon
            className="filter-category"
            color="#fff"
            style={{height: '40px', width: '40px'}}
            onClick={() => this.onFilterClick()}
          />
        </button>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories,
  }
}
export default connect(mapStateToProps)(CategorySelector)
