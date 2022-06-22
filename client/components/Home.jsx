import React, { useState, useEffect } from 'react';
import Quote from './Quote.jsx';
import SavedQuotes from './SavedQuotes.jsx';

export default function Home() {

  return (
    <div className="home">
      <h2>Digital Commonplace Book</h2>
      <Quote />
      <SavedQuotes />
    </div>
  );
}
