import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todoList,deleteTodo}) => {
    return (
        <div className="List">
            <h4>Todo List🌿</h4>
            <input placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
                {todoList.map((todoItem)=>{
                    return <TodoItem key={todoItem.id} todoItem={todoItem} deleteTodo={deleteTodo}/>
                })}
            </div>
        </div>
    )
    
}

export default List;