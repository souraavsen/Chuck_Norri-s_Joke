import React from "react";

const Joke = ({ joke, fetchJoke, search }) => {
  return (
    <div>
      <p>{joke}</p>
        <button className='button' onClick={() => fetchJoke()}>
          New Joke
        </button>
    </div>
  );
};

export default Joke;
