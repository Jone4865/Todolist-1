import React from 'react';
import "./style.css"


function Todo({ todo, onRemove, onToggle }) {
    return (
        <div className='todo-container'>
            <div>
                <h2 className='todotitle'>제목 :{todo.title}</h2> 
                <div>할일 :{todo.text}</div>
            </div>
            <div className='mybtn'>
                <button onClick={() => onToggle(todo.id)}>{todo.isDone === false ? "완료하기" : "취소하기"}</button>
                <button onClick={() => onRemove(todo.id)}>삭제</button>
            </div>
        </div>
    );
}

export default Todo;