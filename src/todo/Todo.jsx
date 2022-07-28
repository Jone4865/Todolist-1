import React from 'react';
import "./style.css"


function Listing({ todo, onRemove}) {
    
    return (
        todo.isDone === false ? 
    <div className='list_item'>
        <div>{todo.title}</div> <span>{todo.text}</span>
        <button>완료하기</button>
        <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div> : ''
    );
}

function Todo({ todos, onRemove }) {
    return (
        <div className='all'>
            <h2 className='ingtext'>
            열심히 하는 중..!
            </h2>
            <div className='todolist'>
                {todos.map(todo => (
                    <Listing todo={todo} key={todo.id} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    );
}

export default Todo;