import './App.css'
import { useState } from 'react'
import { useRef, useReducer } from 'react'

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';


//reducer로 변경
function reducer(state, action) {
  switch(action.type){
    case "CREATE" : return [action.data,...state];
    case "UPDATE" : return [action.data,...state];
    case "DELETE" : return state.filter(data=>action.data.id != data.id);
    default: return state;
  }
  
}

function App() {

  //reducer를 통해 데이터 조작
  const [todoList,dispatch] = useReducer(reducer,[]);

  //Id값
  const todoId = useRef(0);

  //Todo 추가
  const createTodo = (content) => {
    dispatch({
      type:"CREATE",
      data:{
        id:todoId.current++,
        content:content,
        date:new Date().toDateString()
      }
    })
  }


  //Todo 삭제
  const deleteTodo = (targetId) => {
    dispatch({
      type:"DELETE",
      data:{id:targetId},
    })
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
