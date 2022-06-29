import React from "react";

export default function GetNewQuoteButton({ fetchQuote }){
  return (
    <button type="button" onClick={ () => fetchQuote() }>
      Get New Quote
    </button>
  );
}