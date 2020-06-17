import React from 'react';
import Card from './Card';
import InviteToSearch from './InviteToSearch';

export default function CardCollection({movies}) {
  return (
    <>
      {movies.length > 0 ? (
        <div className='card-collection'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <InviteToSearch />
      )}
    </>
  );
}
