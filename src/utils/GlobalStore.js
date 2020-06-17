import React, {createContext, useReducer, useContext} from 'react';
import {SEARCH_MOVIES, LOADING, SEARCH_TERM} from './actions';

const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        currentPost: action.post,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_TERM:
      return {
        ...state,
        searchTerm: ,
      };

    default:
      return state;
  }
};

const StoreProvider = ({value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    movies: [],
    loading: false,
    searchTerm: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};
