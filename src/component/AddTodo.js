import React from 'react'

const AddTodo = () => {
  return (
    <div>
    <input
    className="todo-main"
    // id = "description"
    type = "text"
    // value = {task.description}
    // onChange={e =>{handleChange(e)}}
    placeholder="Add Something"
    ></input>
    </div>
  )
}

export default AddTodo
