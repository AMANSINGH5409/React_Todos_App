import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, {useState} from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo : ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos,setTodos] = useState([
    {
      sno:1,
      title:"Go to market",
      desc:"you need to go to market to get this job done"
    },
    {
      sno:2,
      title:"Go to Mall",
      desc:"you need to go to market to get this job done2"
    },
    {
      sno:1,
      title:"Go to Ghat",
      desc:"you need to go to market to get this job done3"
    }
  ]);
  return (
    <>
    <Header title="My Todo list" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
