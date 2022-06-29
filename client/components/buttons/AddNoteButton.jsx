import React, { useState } from 'react';
import { useForm } from '../useForm';

export default function AddNoteButton({ setNewNote, handleAddNote }) {
  const [showForm, setShowForm] = useState(false);
  const [values, handleChange] = useForm({ text: '', author: '' });

  const createNote = (e) => {
    e.preventDefault();
    const note = {
      text: values.text,
      author: values.author,
    };
    setShowForm(false);
    console.log('note line 15', note);
    handleAddNote(note);
    values.text='';
    values.author='';
  };

  return (
    <>
      {showForm ? (
        <div id="addNoteContainer">
          <form name="addNote" id="addNoteForm" onSubmit={createNote}>
            <label name="addNote">Thought/Quote</label>
            <textarea
              name="text"
              type="text"
              value={values.text}
              onChange={handleChange}
            />
            <label name="addNote">Author</label>
            <input
              name="author"
              type="text"
              value={values.author}
              onChange={handleChange}
            />
            <div id="thoughtFormBtns">
              <button type="submit" name="addNote" id="addNoteBtn">
                Add Note
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  values.text = '';
                  values.author = '';
                }}
              >
                Discard Note
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)} id="toggleNoteForm">
          Add Thoughts
        </button>
      )}
    </>
  );
}
