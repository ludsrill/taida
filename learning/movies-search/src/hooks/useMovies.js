import reponseMovies from '../mocks/response-movies.json'

export function useMovies () {
  const movies = reponseMovies.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies: mappedMovies }
}
