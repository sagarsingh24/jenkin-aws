import React from "react";
import "./Style.css";

const TodoItem = ({todo,onDelete}) => {
  return (
    <div className="todoItemOuterDiv">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
};

export default TodoItem;
