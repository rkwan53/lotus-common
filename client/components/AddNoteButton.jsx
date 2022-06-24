import React, { useState} from 'react';

 

export default function AddNote(){
  const [ showForm, setShowForm ] = useState(false)

//  const btn = document.getElementById('addNoteBtn');
//   btn.addEventListener('click', () => {
//   const form = document.getElementById('addNoteForm');
//     if (form.style.display === 'none') {
//       // 👇️ this SHOWS the form
//       form.style.display = 'block';
//     } else {
//       // 👇️ this HIDES the form
//       form.style.display = 'none';
//     };
//   });

  return (
    <>
      { 
      (showForm) ?
      <div id='addNoteContainer'>
        <form id="addNoteForm">
          <label>Thought/Quote</label>
          <textarea type="text" />
          <label>Author</label>
          <input type="text" />
          
          <button id="addNoteBtn">Add Note</button>
          <button>Discard Note</button>
        </form>
        </div>:
  <button onClick={()=>setShowForm(true)} id="toggleNoteForm">Add Thoughts</button>
} 
    </>
  )
}