import React, { useState, useEffect } from 'react';
import axios from 'axios';

function savedQuotes(props) {
  const [allSavedQuotes, setAllSavedQuotes] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchAllSavedQuotes(); // fetch quote when component is mounted
  }, []);

  const fetchAllSavedQuotes = () => {
    axios
      .get('/savedQuotes/all')
      .then((data) => {
        console.log('data ->', data.data);
        setAllSavedQuotes(data.data);
        // setAuthor(data.author);
        console.log('data-->', data.data);
        setLoaded(true);
      })
      .catch((error) => console.error(error));
  };

  const quotes = [];
  for (let i = allSavedQuotes.length - 1; i >= 0; i--) {
    quotes.push(
      <li key={i}>
        {`${allSavedQuotes[i].text}`}
        <ul>
          <li>{`--${allSavedQuotes[i].author}`}</li>
        </ul>
      </li>
    );
  }

  return (
    <div id="allSavedQuotes">
      <ul>{quotes}</ul>
    </div>
  );
}

export default savedQuotes;
