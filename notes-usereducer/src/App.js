// App.js
import React from 'react';
import { NotesContextProvider } from './NotesContext';
import Notes from './Notes';

function App() {
  return (
    <div className="App">
      <NotesContextProvider>
        <Notes />
      </NotesContextProvider>
    </div>
  );
}

export default App;

