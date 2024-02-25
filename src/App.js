import './styles.css';
import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    const noteWithTimestamp = {
      ...newNote,
      createdAt: Date.now() 
    };
    setNotes([...notes, noteWithTimestamp]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};
export default App;