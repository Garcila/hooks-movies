import React, {useState} from 'react';

import Title from './components/Title';
import CardCollection from './components/CardCollection';
import './App.css';
import SearchBar from './components/SearchBar';

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;

function App() {
  const [movies, setMovies] = useState([]);

  async function getMovies(e, searchTerm, setSearchTerm) {
    e.preventDefault();
    const result = await fetch(API_URL + searchTerm);
    const data = await result.json();
    setMovies(data.results);
    setSearchTerm('');
  }

  return (
    <div className='App'>
      <Title />
      <SearchBar getMovies={getMovies} />
      <CardCollection movies={movies} />
    </div>
  );
}

export default App;
