import React from 'react';
import "./style.css"

function Form({ title, text, onChange, onCreate }) {
    return (
        <div className='myform'>
            <h4 className="title">제목 :</h4>
            <input
                name="title"
                onChange={onChange}
                value={title}
            />
            <h4 className="todo">내용 :</h4><input
                name="text"
                onChange={onChange}
                value={text}
            />
            <button className='onbtn' onClick={onCreate}>등록</button>
        </div>
    );
}

export default Form;