import React, { useState, useEffect } from 'react';
import Quote from './Quote.jsx';
import SavedQuotes from './SavedQuotes.jsx';

export default function Home() {
  const [loadedAllSavedQuotes, setLoadedAllSavedQuotes] = useState(false);
  return (
    <div className="home">
      <h2 id="title">Digital Commonplace Book (Quote Keeper)</h2>
      <Quote/>
    
    </div>
  );
}
