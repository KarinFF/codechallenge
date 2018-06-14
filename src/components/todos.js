import React from "react"
import Todo from "./todo"
import Users from "./users"

class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      usersList: [
      ]
    }
  }

  componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/todos").then(response => (
    response.json()
  )).then(json => {
    this.setState({ todos: json })
  })
  fetch("https://jsonplaceholder.typicode.com/users").then(response => (
    response.json()
  )).then(json => {
    this.setState({ usersList: [] })
  })
}

  render() {
     return (
       <div className="textstyle">
         <h2>Todos</h2>
         {this.state.todos.map((todos) => {
           return <Todo
                key={todos.id}
                user={todos.userId}
                title={todos.title}
                name={this.state.name}
                />
         })}

       </div>
     )
   }
 }
export default Todos
