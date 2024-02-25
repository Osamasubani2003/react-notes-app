import React, { useState } from 'react';

const Note = ({ note, deleteNote }) => {
  const { id, title, body, reminder, color, createdAt } = note;
  const [backgroundColor, setBackgroundColor] = useState(color);

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <div className="note" style={{ backgroundColor: backgroundColor }}>
      <h3>{title}</h3>
      <p>{body}</p>
      {reminder && <p><strong>Reminder:</strong> {new Date(reminder).toLocaleString()}</p>}
      <p><small>History: {new Date(createdAt).toLocaleString()}</small></p>
      <div class="buttonColor">
      <button class="bgcolor" style={{backgroundColor:"#ffb0b0"}} onClick={() => handleColorChange('#ffb0b0')}></button>
      <button class="bgcolor" style={{backgroundColor:"#ffe2e9"}} onClick={() => handleColorChange('#ffe2e9')}></button>
      <button class="bgcolor" style={{backgroundColor:"#ffe8d5"}} onClick={() => handleColorChange('#ffe8d5')}></button>
      <button class="bgcolor" style={{backgroundColor:"#ffba98"}} onClick={() => handleColorChange('#ffba98')}></button>
      <button class="bgcolor" style={{backgroundColor:"#fcffca"}} onClick={() => handleColorChange('#fcffca')}></button>
      <button class="bgcolor" style={{backgroundColor:"#cdffab"}} onClick={() => handleColorChange('#cdffab')}></button>
      <button class="bgcolor" style={{backgroundColor:"#b9d9ff"}} onClick={() => handleColorChange('#b9d9ff')}></button>
      <button class="bgcolor" style={{backgroundColor:"#92a8d1"}} onClick={() => handleColorChange('#92a8d1')}></button>
      </div> 
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
