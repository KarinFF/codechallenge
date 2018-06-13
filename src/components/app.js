import React from "react"
import Todos from "./todos"
import HomeView from "./homeview"
import Nav from "./nav"
import {BrowserRouter, Route} from "react-router-dom"

class App extends React.Component {

  render() {
     return (
      <BrowserRouter>
      <div>
        <Nav/>
        <Route exact path="/" component={HomeView}/>
        <Route  exact path="/todos" component={Todos}/>
      </div>
      </BrowserRouter>
     )
   }
 }

export default App
