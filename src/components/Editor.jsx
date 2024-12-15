import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({createTodo}) => {

    const [content, setContent] = useState("");

    //텍스트입력할때마다 content에 새롭게 저장하기
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onClickAdd = () => {
        // 내용없을 경우 추가x
        if(content === ""){
            return;
        }
        createTodo(content);
        setContent("");
    }
    
    const onKeyDown = (e) =>{
        if(e.keyCode === 13){
            onClickAdd();
        }
    }

    return (
        <div className="Editor">
            <input
             value={content}
             placeholder="Todo..." 
             onChange={onChangeContent}
             onKeyDown={onKeyDown}
             />
             
            <button onClick={onClickAdd}>추가</button>
        </div>
    )
}

export default Editor;