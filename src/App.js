import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import {AddTodo} from './MyComponent/AddTodo';
import React,  { useState, useEffect } from 'react';
function App() {
  let intiTodo;
  if(localStorage.getItem("todos"))
  {
    intiTodo = []
  }
  else
  {
    intiTodo = JSON.parse(localStorage.getItem("todos")===null)
  }

  const onDelete = (todo) =>{
    console.log("I am OnDelete", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title,desc) => {
    console.log("I am Adding This Todo", title, desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else
    {
       sno = todos[todos.length-1].sno + 1
    }
   
    const myTodo = {
      sno : sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)

    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState ([])
  
  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(todos));
  }, [todos])
  

  return (
    <>

  <Header />
  <AddTodo addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer />
  </>
  )
}
export default App;
