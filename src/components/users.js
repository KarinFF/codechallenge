import React from "react"
import {Link} from "react-router-dom"

class Users extends React.Component {
  render() {
    return (

      <div className="textstyle">
        <p>{this.props.name}</p>
      </div>
      )
    }
  }

export default Users
