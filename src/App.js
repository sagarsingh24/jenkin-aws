import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Todos from "./component/Todos";
import React, { useState, useEffect } from "react";
import AddTodo from "./component/AddTodo";

function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((i)=>{
      return i != todo
    }))
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "todo1",
      desc: "this is my first todo",
    },
    {
      id: 2,
      title: "todo2",
      desc: "this is my second todo",
    },
    {
      id: 3,
      title: "todo3",
      desc: "this is my third todo",
    },
  ]);

  return (
    <>
      <Header title="First Project-Jenkins tutorial" />
      <AddTodo />
      <Todos todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
