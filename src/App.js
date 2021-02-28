import "./App.css";
import "./index.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Jokes from "./Components/Jokes";
import Message from "./Components/Message";
import Spinner from "./spinner.gif";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const [joke, setJoke] = useState([]);
  const [search, setSearch] = useState(false);
  const [searched, setSearched] = useState([]);
  const [loader, setLoader] = useState(true);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState(false);

  useEffect(() => {
    fetchJoke();
    searchitem();
  }, []);

  const fetchJoke = async () => {
    setQuery("");
    setSearched([]);
    const joke = await fetch("https://api.chucknorris.io/jokes/random");
    const result = await joke.json();
    setJoke(result.value);
    setLoader(false);
  };

  const searchitem = async () => {
    setJoke([])
    const searchedjoke = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${query}`
    );
    setSearched(searchedjoke.data.value);
    setLoader(false);
    setSearch(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchitem();
  };


  const Showmessage = () => {
    if(query.length>0)setMessage(true);
  };

  const Cnclmessage = () => {
    setMessage(false);
  };

  return (
    <div className='App-header'>
      <div>
        <button
          className='btn'
          style={{ fontSize: "24px", margin: "0" }}
          onClick={fetchJoke}
        >
          <h1>Chuck Norri's Joke</h1>
        </button>
      </div>
      <section className='form'>
        <div>
          <div
            className='form'
            onMouseOver={Showmessage}
            onMouseOut={Cnclmessage}
          >
            <button className='btn' onClick={searchitem}>
              <SearchIcon className='search' />
            </button>
            <form onSubmit={onSubmit} className='main'>
              <input
                onChange={(e) => setQuery(e.target.value)}
                type='text'
                placeholder='Search with Categories...'
                autoFocus
                value={query}
              />
            </form>
          </div>
          {message === true && <Message />}
        </div>
      </section>
      <div className='image'></div>
      <div className='text'>
        {loader ? (
          <img className='spinner' src={Spinner} alt=''></img>
        ) : (
          <Jokes
            searched={searched}
            joke={joke}
            fetchJoke={fetchJoke}
            search={search}
            query={query}
          />
        )}
      </div>
    </div>
  );
}

export default App;
