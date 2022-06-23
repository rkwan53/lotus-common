import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function savedQuotes(props) {
  const [allSavedQuotes, setAllSavedQuotes] = useState({});
  const [loadedAllSavedQuotes, setLoadedAllSavedQuotes] = useState(false);

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
        setLoadedAllSavedQuotes(true);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteQuote = (e) => {
    console.log(e.target);
    let quoteToDelete = document.getElementById('quoteText');
    axios.delete('/').then((data) => {
      console.log('deleted quote').then(fetchAllSavedQuotes());
    });
  };

  const quotes = [];
  for (let i = allSavedQuotes.length - 1; i >= 0; i--) {
    quotes.push(
      <div key={i} quotenum={i}>
        <div className="savedQuote">
          <li label="quoteText{i}">
            {`"${allSavedQuotes[i].text}"`}
            <ul>
              <li>{`-- ${allSavedQuotes[i].author}`}</li>
            </ul>
          </li>

          <a onClick={handleDeleteQuote}>
            <img
              quotenum={i}
              src="https://www.pngrepo.com/png/171093/180/garbage.png"
              width="25px"
            />
          </a>
        </div>
        <hr />
      </div>
    );
  }

  return (
    <div id="allSavedQuotes">
      <div id="savedQuotesTitle">Saved Quotes</div>
      <ul>{quotes}</ul>
    </div>
  );
}

export default savedQuotes;
