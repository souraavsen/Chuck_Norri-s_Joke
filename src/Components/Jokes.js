import React from "react";
import Joke from "./Joke";

const Jokes = ({ joke, fetchJoke, search, searched, query }) => {
  return (
    <div className='joke'>
      {search === true && <p> {searched}</p>}
      {query.length === 0 && <Joke joke={joke} fetchJoke={fetchJoke} />}
    </div>
  );
};

export default Jokes;
