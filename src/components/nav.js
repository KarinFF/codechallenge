import React from "react"
import {Link} from "react-router-dom"

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/todos">
                Tasks
              </Link>
            </li>
          </ul>
      </div>
    )
  }
}

export default Nav
