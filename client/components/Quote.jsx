import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';


function Quote() {
  const [quote, setQuote] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [allSavedQuotes, setAllSavedQuotes] = useState({});
  const [loadedAllSavedQuotes, setLoadedAllSavedQuotes] = useState(true);

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
        </div>      
    );
  }
}

export default Quote;
