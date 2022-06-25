import React from 'react';

export default function SaveNote({ saveThisQuote }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        saveThisQuote();
      }}
    >
      Save Quote
    </button>
  );
}
