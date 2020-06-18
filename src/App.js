import React from 'react';
import {StoreProvider} from './utils/GlobalStore';

import Title from './components/Title';
import CardCollection from './components/CardCollection';
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <Title />
        <SearchBar />
        <CardCollection />
      </StoreProvider>
    </div>
  );
}

export default App;
