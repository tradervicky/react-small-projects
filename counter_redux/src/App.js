
import './App.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {incNumber, decNumber} from './action/index';
import { useState } from 'react';
function App() {
  const [data, setData] =useState(0)
  const myState = useSelector((state)=> state.Counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={()=> dispatch(decNumber(2))}>Dec -</button>
      <input type="text" value={myState} />
      <button onClick={()=>  dispatch(incNumber(2))}>Inc +</button>
    </div>
  );
}

export default App;
