import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote(props) {
  const [quote, setQuote] = useState({});
  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      fetchQuote(); // fetch quote when component is mounted
    },[]);

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

    if (!quote.author) quote.author = 'Unknown';
if (!loaded){
  return(
    <div id='loading'>loading...</div>
  )
} else {
    return (
      <div id="randomQuote">
        <h3>"{quote.text}"</h3>
        <h4>- {quote.author}</h4>
        <button>Save Quote</button>
      </div>
    );
  }
}

export default Quote;
