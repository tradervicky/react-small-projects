
import React, { useContext, useState } from 'react';
import { NotesContext } from './NotesContext';
import Note from './Note';

const Notes = () => {
  const { notes, dispatch } = useContext(NotesContext);
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (content.trim() !== '') {
      dispatch({ type: 'ADD_NOTE', payload: { id: Date.now(), content } });
      setContent('');
    }
  };

  return (
    <div>
      <h2>Notes Application</h2>
      <div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
