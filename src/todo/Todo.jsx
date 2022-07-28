import React from 'react';
import "./style.css"


function Todo({ todo, onRemove, onToggle }) {
    return (
            <div className='list_item'>
                <div className='todohead'>제목 :{todo.title}</div> <div className='todobody'>할일 :{todo.text}</div>
                <button className='btn1' onClick={() => onToggle(todo.id)}>완료하기</button>
                <button className='btn1' onClick={() => onRemove(todo.id)}>삭제</button>
            </div>
    );
}

export default Todo;