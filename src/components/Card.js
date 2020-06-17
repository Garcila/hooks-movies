import React from 'react';
const posterPath = `https://image.tmdb.org/t/p/w500/`;

export default function Card({movie}) {
  return (
    <div className='card' style={{}}>
      <img src={`${posterPath}${movie.poster_path}`} alt='' style={{width: '25vw'}}></img>
      <h3>{movie.original_title}</h3>
      <div>
        <p>rElEAsE dAtE _ {movie.release_date}</p>
        <p>AvErAgE rAtIng _ {movie.vote_average}</p>
        <p>nUmbEr Of vOtEs _ {movie.vote_count}</p>
      </div>
    </div>
  );
}
