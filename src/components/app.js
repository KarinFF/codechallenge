import React from "react"
import Todos from "./todos"
import HomeView from "./homeview"
import {BrowserRouter, Route} from "react-router-dom"

class App extends React.Component {

  render() {
     return (
       <div>
         <HomeView/>
       </div>
     )
   }
 }

export default App
