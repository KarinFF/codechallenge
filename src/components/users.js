import React from "react"

class Users extends React.Component {
  render() {
    return (
      <div>
        <a>{this.props.name}</a>
      </div>
      )
    }
  }

export default Users
