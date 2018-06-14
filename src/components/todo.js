import React from "react"


class Todo extends React.Component {

  render() {
     return (
       <div className="textstyle">
         <p>{this.props.name}</p>
         <p>{this.props.title}</p>
       </div>
     )
   }
 }

export default Todo
