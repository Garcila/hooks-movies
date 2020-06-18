import React, {createContext, useReducer, useContext} from 'react';
import {SEARCH_MOVIES, LOADING} from './actions';

const StoreContext = createContext();
const {Provider} = StoreContext;

const initialState = {
  starters: ['Amelie', 'Moulin Rouge', 'Run Lola Run', 'Clockwork Orange'],
  movies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      const movies = action.payload;
      return {...state, movies};
    case LOADING:
      return;
    //TODO: do loading
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
