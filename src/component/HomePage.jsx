import React, { useState } from "react";
import "./HomePage.css";
function HomePage() {

  const initialState = {
    
    description : ""
  }
  const [array, setArray] = useState([])
  const [task, setTask] = useState(initialState)

  

  
  const handleChange = (e) =>{
    console.log("value",e.target.value);
    const newTask = {...task};
    newTask[e.target.id] = e.target.value;
    setTask(newTask);
  }



  const handle = () => {
  

     setArray([...array, task.description])




    setTask(initialState);
    console.log("state",...array)
  };
  return (
    <div className="main">
      <p> Hii this is My first project</p>
      <input
      className="todo-main"
      id = "description"
      type = "text"
      value = {task.description}
      onChange={e =>{handleChange(e)}}
      placeholder="Add Something"
      ></input>
      <div style={{ display: "block", backgroundColor: "pink" }}>
        {array.map((el, index) => (
          <div key={index} style={{ color: "yellow", backgroundColor:"green",marginBottom:"10px" }}>{el}</div>
        ))}

      </div>
      <button onClick={handle}> submit </button>
    </div>
  );
}

export default HomePage;
