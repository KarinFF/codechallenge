import React from "react"
import Todos from "./todos"
import HomeView from "./homeview"

class App extends React.Component {
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
       <div>
         <HomeView/>
       </div>
     )
   }
 }

export default App
