import React from 'react'
import TodoItem from "./TodoItem";
import "./Style.css"


const Todos = (props) => {
  return (
    <div >
      <h3 >Todos List </h3>
      <div className="todoOuterDiv">
      {props.todo.length != 0 ?
        props.todo.map((todo,index) => {
       return <TodoItem  key={index} todo={todo} onDelete={props.onDelete} />     
      }):"No Todos To Display"}
      </div>
      
    </div>
  )
}

export default Todos
