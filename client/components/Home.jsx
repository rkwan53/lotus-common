import React, { useState, useEffect } from 'react';
import Quote from './Quote.jsx';
import SavedQuotes from './SavedQuotes.jsx';
import AddNoteButton from './AddNoteButton.jsx';
import GetNewQuoteButton from './GetNewQuoteButton.jsx';
import SaveNote from './SaveQuoteButton.jsx';

export default function Home() {
  const [loadedAllSavedQuotes, setLoadedAllSavedQuotes] = useState(false);
  return (
    <div className="home">
      <h2 id="title">Digital Commonplace Book (Quote Keeper)</h2>
      <Quote />
      <div id="actionBtns">
        <GetNewQuoteButton />
        <SaveNote />
        <AddNoteButton />
      </div>
      <hr />
      <SavedQuotes />
    </div>
  );
}
