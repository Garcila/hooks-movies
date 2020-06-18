import React, {useEffect, useRef} from 'react';
import {useStoreContext} from '../utils/GlobalStore';
import {SEARCH_MOVIES} from '../utils/actions';
import {callMovieDB} from '../utils/API';

export default function SearchBar() {
  const searchTermRef = useRef();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function firstMovies() {
      const movieFromListPosition = Math.floor(Math.random() * state.starters.length);
      const data = await callMovieDB(state.starters[movieFromListPosition]);
      dispatch({type: SEARCH_MOVIES, payload: data.results});
    }
    firstMovies();
  }, [dispatch, state.starters]);

  async function getMovies(e) {
    e.preventDefault();
    const data = await callMovieDB(searchTermRef.current.value);
    dispatch({type: SEARCH_MOVIES, payload: data.results});
    searchTermRef.current.value = '';
  }

  return (
    <div className='searchBar'>
      <img
        className='searchBar__ligh-faucet'
        src='https://res.cloudinary.com/garcila/image/upload/e_colorize:0/v1592484458/hook_a_movie/Bulb.png'
        alt='light-faucet'
      />
      <form className='searchBar__form' onSubmit={(e) => getMovies(e)}>
        <input
          className='searchBar__form-input'
          type='text'
          placeholder='sEArch tErm'
          ref={searchTermRef}
        />
      </form>
    </div>
  );
}
