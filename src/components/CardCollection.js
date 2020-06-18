import React from 'react';
import Card from './Card';
import InviteToSearch from './InviteToSearch';
import {useStoreContext} from '../utils/GlobalStore';

export default function CardCollection() {
  const [state, dispatch] = useStoreContext();
  return (
    <>
      {state.movies.length > 0 ? (
        <div className='card-collection'>
          {state.movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <InviteToSearch />
      )}
    </>
  );
}
