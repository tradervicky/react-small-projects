
import React, { useContext, useState } from 'react';
import { NotesContext } from './NotesContext';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const [content, setContent] = useState(note.content);

  const handleEditNote = (id) => {
    dispatch({ type: 'EDIT_NOTE', payload: { id, content } });
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  return (
    <div className='Note-text'>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => handleEditNote(note.id)}>Save</button>
      <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
