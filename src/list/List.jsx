import React from 'react';
import "./style.css"
import Todo from '../todo/Todo';

function List({ todos, onRemove, onToggle }) {
    console.log(...todos)
    return (
        <div>
            <div className='all'>
                <h2 className='donetext'>
                    열심히 하는 중..!
                </h2>
                <div className='todolist'>
                    {todos.map((todo) =>
                        todo.isDone === false ? (
                            <Todo todo={todo} onRemove={onRemove} onToggle={onToggle} />
                        ) : (
                            " "
                        )
                    )}
                </div>
            </div>
            <div className='all'>
                <h2 className='donetext'>
                    완료..!
                </h2>
                <div className='todolist'>
                    {todos.map((todo) =>
                        todo.isDone === true ? (
                            <Todo todo={todo} onRemove={onRemove} onToggle={onToggle} />
                        ) : (
                            " "
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default List;