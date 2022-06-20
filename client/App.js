import React from 'react';
import RandomJoke from './components/RandomJoke';

export default function App() {
  return (
    <div id="app">
      <RandomJoke />
      <button type="button">Save</button>
    </div>
  );
}
