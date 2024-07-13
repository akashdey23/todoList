import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoComp from '/components/TodoComp.jsx';

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  function pushData() {
    if (todo.trim() === "") return;
    let todoObj = {
      id: Math.random() + Date.now() + todo,
      todo: todo,
      isCompleted: false,
    };
    setTodoArr([...todoArr, todoObj]);
    setTodo(""); // Clear the input field after submission
  }

  function handleDel(id) {
    console.log(id);
    let newTodoArr = todoArr.filter((el) => el.id !== id);
    setTodoArr(newTodoArr);
  }

  function update(id) {
    let updatedArr = todoArr.map((el) => {
      return el.id === id ? { ...el, isCompleted: !el.isCompleted } : el;
    });
    console.log(updatedArr);
    setTodoArr(updatedArr);
  }

  return (
    <div>
      <div className='header1'>
        TodoList
      </div>
      <div className='header2'>
        <input 
          type='text' 
          name='textbox' 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
          required 
        />
        <button onClick={pushData}>Submit</button>
      </div>
      <div>
        {todoArr.map((el) => (
          <div key={el.id}>
            <TodoComp
              id={el.id}
              todo={el.todo}
              status={el.isCompleted}
              updFun={update}
              delFun={handleDel}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
