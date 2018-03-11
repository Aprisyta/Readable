import React, {Component} from 'react'
import MultipleOption from 'react-icons/lib/fa/ellipsis-h'

class DropDownMenu extends Component {

  state = {
    isElipsisClicked: false,
  }

  showDropDown = () => {
    const { isElipsisClicked } = this.state

    isElipsisClicked === true
      ? this.setState({ isElipsisClicked: false })
      : this.setState({ isElipsisClicked: true })
  }

  render() {
    const { isElipsisClicked } = this.state
    const { context } = this.props
    return (
      <div className="ellipsis-holder">
        <span className="ellipsis-button-holder" onClick={this.showDropDown}>
          <MultipleOption height="2em" color="#6a1b9a"/>
        </span>
        <span>
          {
            isElipsisClicked === true
              ? <div className="dropdown-content-holder">
                  <ul>
                    <li>Edit {context}</li>
                    <li>Delete {context}</li>
                  </ul>
                </div>
              : null
          }
        </span>
      </div>
    )
  }
}

export default DropDownMenu;
