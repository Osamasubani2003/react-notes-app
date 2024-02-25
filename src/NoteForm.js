import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reminder, setReminder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    const newNote = {id: Date.now(),title,body,reminder,};
    addNote(newNote);
    setTitle('');
    setBody('');
    setReminder('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      <label>Reminder:</label>
      <input type="datetime-local" placeholder="Reminder" value={reminder} onChange={(e) => setReminder(e.target.value)}/>
      <button type="submit">Add Note</button>
    </form>
  );
};
export default NoteForm;