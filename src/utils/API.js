const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;

export async function callMovieDB(searchTerm) {
  const result = await fetch(`${API_URL}${searchTerm}`);
  const dataRaw = await result.json();
  return dataRaw;
}
