import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, {useState , useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo : ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    let Sno = todos.length===0? 1 : todos[todos.length-1].sno + 1;
    const newTodo = {
      sno:Sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,newTodo]);
  }

  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);
  
  return (
    <>
    <Router>
      <Header title="My Todo list" searchBar={false}/>
      <Routes>
        <Route exact path="/" render={()=>{
          return(
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete} />
            </>
          )
        }}>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
