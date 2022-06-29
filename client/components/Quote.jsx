import React, { useState } from 'react';

function Quote(props) {
  const { newQuote } = props;

  const [newSavedQuote, setNewSavedQuote] = useState(false);

  if (newQuote.author === null) newQuote.author = 'Unknown';
  // if (!loaded) {
  //   return <div id="loading">loading...</div>;
  // } else {
  return (
    <div id="randomNewQuote">
      <div id="quoteText">"{newQuote.text}"</div>
      <p>-- {newQuote.author}</p>
    </div>
  );
  // }
}

export default Quote;
