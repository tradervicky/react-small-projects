import React, { useContext } from 'react'
import {DataContext} from './DataContext'
function ComponentB() {
    const {data} = useContext(DataContext);

  return (
    <div>
        <h2>Component B</h2>
        <p>Data From Component A : {data}</p>

    </div>
  );
};

export default ComponentB