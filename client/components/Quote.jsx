import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import SavedQuotes from './SavedQuotes';
import AddNoteButton from './AddNoteButton'

function Quote() {
  const [quote, setQuote] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [newSavedQuote, setNewSavedQuote] = useState(false);

  useEffect(() => {
    fetchQuote(); // fetch quote when component is mounted
  }, []);

  const fetchQuote = () => {
    axios
      .get('/getQuote')
      .then((data) => {
        console.log('data ->', data.data);
        setQuote(data.data);
        // setAuthor(data.author);
        console.log('quote text -->', data.data.text);
        setLoaded(true);
      })
      .catch((error) => console.error(error));
  };

  const saveThisQuote = () => {
    axios
      .post('/save', quote)
      .then((response) => {
        console.log('quote saved -->', quote);
      })
      .catch((error) => console.error(error));
      setNewSavedQuote(true);
  };

  if (!quote.author) quote.author = 'Unknown';
  if (!loaded) {
    return <div id="loading">loading...</div>;
  } else {
    return (
      <div id="randomQuote">
        <div id="quoteText">{quote.text}"</div>
        <p>-- {quote.author}</p>
        <button type="button" onClick={fetchQuote}>
          Get New Quote
        </button>
        <button onClick={saveThisQuote}>Save Quote</button>
        <AddNoteButton/>
        
        <hr />
        <SavedQuotes newSavedQuote = {newSavedQuote}
        />
      </div>
    );
  }
}

export default Quote;
