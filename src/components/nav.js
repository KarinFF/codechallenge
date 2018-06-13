import React from "react"
import {Link} from "react-router-dom"

class Nav extends React.Component {

  render() {
    return (
      <div>
        <div >
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
      </div>
    )
  }
}

export default Nav
