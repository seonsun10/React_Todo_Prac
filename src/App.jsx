import './App.css'
import { useState } from 'react'
import { useRef } from 'react'

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

function App() {

  //TodoList담을 state
  const [todoList,setTodoList] = useState([]);
  //Id값
  const todoId = useRef(0);

  //Todo 추가
  const createTodo = (content) => {

    const todo = {
      id:todoId.current++,
      content:content,
      date:new Date().toDateString()
    };

    setTodoList([todo,...todoList]);
  }

  //Todo 삭제
  const deleteTodo = (targetId) => {
    setTodoList(todoList.filter((todo)=>{return todo.id!=targetId}));
  }

  
  return (
    <>
      <div className='App'>
        <Header/>
        <Editor createTodo={createTodo}/>
        <List todoList={todoList} deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
