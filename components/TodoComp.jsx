import React from 'react'
// import { Link } from 'react-router-dom'
import '../src/App.css';
const TodoComp = ({todo,status,delFun,id,updFun}) => {
    console.log(todo,status,delFun,id);
    
  return (
        <div className='header3'>
            <h1>{todo}</h1>
            <h1>{status ? "Work Done" : "Work Not Done"}</h1>
            <button onClick={()=> delFun(id)}>Delete</button>
            <button onClick={()=> updFun(id)}>Update</button>
        </div>
  )
}

export default TodoComp