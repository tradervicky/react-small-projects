
import React, { useState } from 'react';
import './Todo.css'
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((element, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };
  const handleDeleteAll = ()=>{
    setTodos([])
  }

  return (
    <div className='container'>
        <div className="text">
      <h2>App</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add here</button>
      </div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      {todos.length !==0 ?<button onClick={handleDeleteAll}>delete all</button> : ""}
      </ol>
      </div>
    </div>
  );
};

export default Todo;
