import React from "react"
import {Link} from "react-router-dom"

class Users extends React.Component {
  render() {
    return (

      <div>
        <p>{this.props.name}</p>
      </div>
      )
    }
  }

export default Users
