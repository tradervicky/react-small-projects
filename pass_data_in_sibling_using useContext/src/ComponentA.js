import React, { useContext } from 'react'
import {DataContext} from './DataContext'
function ComponentA() {
    const {data, setData} = useContext(DataContext);
    const handleClick = ()=>{
        setData("This is updata Data Vicky Gupta")
    }
  return (
    <div>
        <h2>Component A</h2>
        <p>{data}</p>
        <button onClick={handleClick} >press me</button>
    </div>

  )
}

export default ComponentA