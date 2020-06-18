import React from 'react';
const posterPath = `https://image.tmdb.org/t/p/w500/`;

export default function Card({movie}) {
  return (
    <div className='card'>
      {movie.poster_path !== null ? (
        <img
          className='card__img'
          src={`${posterPath}${movie.poster_path}`}
          alt='movie poster'
        ></img>
      ) : (
        <div className='card__img' style={{backgroundColor: 'black'}}>
          aaa
        </div>
      )}
      <h3>{movie.original_title}</h3>
      <div className='card__info'>
        <p>rElEAsE dAtE _ {movie.release_date}</p>
        <p>AvErAgE rAtIng _ {movie.vote_average}</p>
        <p>nUmbEr Of vOtEs _ {movie.vote_count}</p>
      </div>
    </div>
  );
}
