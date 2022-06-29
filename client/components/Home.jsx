import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote.jsx';
import SavedQuotes from './SavedQuotes.jsx';
import AddNoteButton from './buttons/AddNoteButton.jsx';
import GetNewQuoteButton from './buttons/GetNewQuoteButton.jsx';
import SaveQuote from './buttons/SaveQuoteButton.jsx';
import { useForm } from './useForm.jsx';

export default function Home() {
  const [quote, setQuote] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [allSavedQuotes, setAllSavedQuotes] = useState([]);
  const [loadedAllSavedQuotes, setLoadedAllSavedQuotes] = useState(false);
  const [values, handleChange] = useState({});
  const [newNote, setNewNote] = useState({ text: '', author: '' });

  useEffect(() => {
    fetchQuote();
    setLoaded(true); // fetch quote when component is mounted
  }, [setLoaded]);

  const fetchQuote = () => {
    axios
      .get('/getQuote')
      .then((data) => {
        console.log('data ->', data.data);
        setQuote(data.data);
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
    // setQuote(true);
    fetchAllSavedQuotes();
  };

  const fetchAllSavedQuotes = () => {
    axios
      .get('/savedQuotes/all')
      .then((data) => {
        console.log('data ->', data.data);
        setAllSavedQuotes(data.data);
        // setAuthor(data.author);
        console.log('data-->', data.data);
      })
      .catch((error) => console.error(error));
  };

  const handleAddNote = (note) => {
    console.log('newNote in Home line 60-->', note);
    
    axios
      .post('/save', note)
      .then((response) => {
        console.log('quote saved -->', note);
      })
      .catch((error) => console.error(error));
    // setQuote(true);
    fetchAllSavedQuotes();
  };
  return (
    <div className="home">
      <h2 id="title">Digital Commonplace Book (Quote Keeper)</h2>
      <Quote newQuote={quote} />
      <div id="actionBtns">
        <GetNewQuoteButton fetchQuote={fetchQuote} setQuote={setQuote} />
        <SaveQuote
          saveThisQuote={saveThisQuote}
          allSavedQuotes={allSavedQuotes}
        />
        <AddNoteButton setNewNote={setNewNote} handleAddNote={handleAddNote} />
      </div>
      <hr />
      <SavedQuotes
        fetchAllSavedQuotes={fetchAllSavedQuotes}
        allSavedQuotes={allSavedQuotes}
      />
    </div>
  );
}
