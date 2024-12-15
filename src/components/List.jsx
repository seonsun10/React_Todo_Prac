import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todoList,deleteTodo}) => {
    
    const [searchVal, setSearchVal] = useState("");

    //검색할 텍스트 저장
    const onChangeSearch = (e) => {
        setSearchVal(e.target.value);
    }

    //검색 텍스트 포함하는 데이터 반환
    const getSearchData = () => {
        if(searchVal === ""){
            return todoList;
        }

        return todoList.filter(
            (todo)=>{
                return todo.content.toLowerCase().includes(searchVal.toLowerCase())
            }
        );
    }

    const searchData = getSearchData();

    return (
        <div className="List">
            <h4>Todo List🌿</h4>
            <input onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
                {searchData.map((todoItem)=>{
                    return <TodoItem key={todoItem.id} todoItem={todoItem} deleteTodo={deleteTodo}/>
                })}
            </div>
        </div>
    )
    
}

export default List;