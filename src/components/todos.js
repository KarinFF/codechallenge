import React from "react"
import Users from "./users"

class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/todos").then(response => (
    response.json()
  )).then(json => {
    this.setState({ todos: json })
  })
}

  render() {
     return (
       <div>
         {this.state.todos.map((user) => {
           return <Users
                key={user.id}
               name={user.name} />
         })}
       </div>
     )
   }
 }
export default Todos