import React, { useReducer, useState } from 'react';
import './App.css';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
      case 'REMOVE_ALL_TODOS':
        return {
          todos:[]
        }
    default:
      return state;
  }
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    if (inputValue) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };
  const handleRemoveAll = () => {
    dispatch({ type: 'REMOVE_ALL_TODOS' });
  };

  return (
    <div className="mainContainer">
    <div className="App">
      
      <h1>Todo List using useReducer</h1>
      <div className="input-container">
        <input
        placeholder='Enter Your text here'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo} >Add</button>
      </div>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {state.todos.length !== 0 ? <button onClick={handleRemoveAll} className='removeAll' >Remove all</button> : ""}
    </div>
    </div>
  );
}

export default App;
