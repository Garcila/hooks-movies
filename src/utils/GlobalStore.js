import React, {createContext, useReducer, useContext} from 'react';
import {SEARCH_MOVIES, LOADING} from './actions';

const StoreContext = createContext();
const {Provider} = StoreContext;

const initialState = {
  starters: [
    'planet of the apes',
    'harry potter',
    'x man',
    'Star Wars',
    'Lord of the rings',
    'avengers',
  ],
  movies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      const movies = action.payload;
      return {...state, movies};
    case LOADING:
      return;
    default:
      break;
  }
};

const StoreProvider = ({value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};
