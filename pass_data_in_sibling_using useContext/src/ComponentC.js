import React, { useContext } from 'react'
import {DataContext} from './DataContext'
function ComponentC() {
    const {data} = useContext(DataContext);
  return (
    <div>
        <h2>Component C</h2>
        <p>This is data From A : {data}</p>
    </div>
  )
}

export default ComponentC