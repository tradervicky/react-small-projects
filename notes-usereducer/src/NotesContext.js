

import React, { createContext, useReducer } from 'react';

export const NotesContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'EDIT_NOTE':
      return state.map((note) =>
        note.id === action.payload.id ? { ...note, content: action.payload.content } : note
      );
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

export const NotesContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, initialState);

  return <NotesContext.Provider value={{ notes, dispatch }}>{children}</NotesContext.Provider>;
};
