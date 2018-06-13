import React from "react"


class Todo extends React.Component {

  render() {
     return (
       <div>
         {this.props.name}
       </div>
     )
   }
 }

export default Todo
