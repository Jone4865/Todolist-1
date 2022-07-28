import React, { useRef, useState } from 'react';

import Header from "./header/Header";
import Form from "./form/Form";
import Todo from "./todo/Todo";
import List from './list/List';

function App() {

  // inputs의 기본값을 줌
  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });
    
  // 제목과 내용을 inputs에 넣어줌
  const { title, text } = inputs;

  // 리스트를 만드는
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      title,
      text,
      isDone : true
    };
    setTodos(todos.concat(todo));
 
    setInputs({
      title: '',
      text: ''
    });
    nextId.current += 1;
  };
 
  const onChangeHe = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };


  const [todos, setTodos] = useState([]);
  //아이디에 기본값을 준다
  const nextId = useRef(0);
  
  
  const onRemove = id => {
    // todo.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = todo.id 가 id 인 것을 제거함
    setTodos(todos.filter(todo => todo.id !== id));
  };

  console.log(...todos)
  const onChangeHandler = (id) => {
    setTodos(todos.map[(...todo)=> todo.id === id? {...todo, isDone:!todo.isDone}: todo])
    console.log(todos)
  };


  return (
    <>
      <div className="App">
        <Header />
        <Form
          title={title}
          text={text}
          onChange={onChangeHe}
          onCreate={onCreate}
        />
        <Todo 
          todos={todos}
          onRemove={onRemove}
          onChange={onChangeHandler} />
        <List todos={todos} onRemove={onRemove} />
      </div>
    </>
  );
}

export default App;