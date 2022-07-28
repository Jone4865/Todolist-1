import React from 'react';
import "./style.css"


function Todo({ todo, onRemove, onToggle }) {
    return (
            <div className='list_item'>
                <div>{todo.title}</div> <span>{todo.text}</span>
                <button onClick={() => onToggle(todo.id)}>완료하기</button>
                <button onClick={() => onRemove(todo.id)}>삭제</button>
            </div>
    );
}

export default Todo;