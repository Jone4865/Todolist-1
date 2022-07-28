import React from 'react';
import "./style.css"

function Listing({ todo, onRemove }) {
    return (
        todo.isDone === true ? 
    <div className='list_item'>
        <div>{todo.title}</div> <span>{todo.text}</span>
        <button>취소하기</button>
        <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div> : ''
    );
}

function List({ todos, onRemove }) {
    return (
        <div className='all'>
            <h2 className='donetext'>
            완료..!
            </h2>
            <div className='todolist'>
                {todos.map(todo => (
                    <Listing todo={todo} key={todo.id} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    );
}

export default List;