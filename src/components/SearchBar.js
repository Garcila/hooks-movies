import React, {useState} from 'react';

export default function SearchBar({getMovies}) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <form
      className='searchBar__form'
      onSubmit={(e) => getMovies(e, searchTerm, setSearchTerm)}
    >
      <input
        className='searchBar__form-input'
        type='text'
        value={searchTerm}
        placeholder='sEArch tErm'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
