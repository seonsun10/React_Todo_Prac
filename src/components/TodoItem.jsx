import "./TodoItem.css"

const TodoItem = ({todoItem,deleteTodo}) => {
    
    const onClickDelete = () => {
        deleteTodo(todoItem.id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" value={todoItem.id}/>
            <div className="content">{todoItem.content}</div>
            <div className="date">{new Date(todoItem.date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}

export default TodoItem;