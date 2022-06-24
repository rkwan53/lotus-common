import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function savedQuotes(props) {
  console.log('props', props);
  const [allSavedQuotes, setAllSavedQuotes] = useState({});
  const [loadedAllSavedQuotes, setLoadedAllSavedQuotes] = useState(false);
  const [newSavedQuote, setNewSavedQuote] = useState(props.newSavedQuote);
  useEffect(() => {
    fetchAllSavedQuotes(); // fetch quote when component is mounted
  }, []);

  useEffect(() => {
    if (props.newSavedQuote) {
      fetchAllSavedQuotes();
      setNewSavedQuote(false);
      setLoadedAllSavedQuotes(true);
    }
  },[]);

  const fetchAllSavedQuotes = () => {
    axios
      .get('/savedQuotes/all')
      .then((data) => {
        console.log('data ->', data.data);
        setAllSavedQuotes(data.data);
        // setAuthor(data.author);
        console.log('data-->', data.data);
        setNewSavedQuote(false);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteQuote = (quotenum) => {
    const quoteToDelete = allSavedQuotes[quotenum];
    console.log('delete this quote-->', quoteToDelete);
    const { _id } = quoteToDelete;
    console.log('id-->', _id);
    axios.delete('/delete', { data: { _id } });
    // .then(() => {
    //   setLoadedAllSavedQuotes(false);
    // });
    setLoadedAllSavedQuotes(false);
    fetchAllSavedQuotes();
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

          <a onClick={() => handleDeleteQuote(i)}>
            <img
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
