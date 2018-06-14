import React from "react"
import Users from "./users"
import Todos from "./todos"

class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users").then(response => (
    response.json()
  )).then(json => {
    this.setState({ users: json })
  })
}

  render() {
     return (
       <div className="textstyle">
         <h2>Users</h2>
         {this.state.users.map((user) => {
           return <Users
                key={user.id}
               name={user.name} />
         })}
       </div>
     )
   }
 }
export default HomeView
