import React, { useEffect, useState } from 'react';

function RandomQuote() {
  // const [jokeText, setJokeText] = useState('');
  // const [loaded, setLoaded] = useState(null);

  // useEffect(() => {

  //   axios
  //     .get(randomJokeUrl)
  //     .then((data) => {
  //       console.log('axios response --->', data);
  //     })
  //     .catch((error) => setError(error.message));
  // }, []);
  return (
    <div id="randomQuote">
      <h2>Show random Quote here</h2>
    </div>
  );
}

//  function DisplayJoke(){
//   return(
//     <div id='randomJoke'>
//       <h2>Show random joke here</h2>
//     </div>
//   )
// }

export default RandomQuote;
