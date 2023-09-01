import './App.css';
import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className="App">
      <h1>NotePad</h1>
      <div className="notes-container">
        <div className="notes">
          {notes.map((note, index) => (
            <div key={index} className="note">
              {note}
            </div>
          ))}
        </div>
        <div className="new-note">
          <input
          type="text"
          placeholder="Add a note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          />
          <button onClick={addNote}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
