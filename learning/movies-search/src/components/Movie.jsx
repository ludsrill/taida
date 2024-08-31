function ListMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  )
}
function NoMovies () {
  return (<p>No se encontro pelicula</p>)
}

export function Movie ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListMovies movies={movies} />
      : <NoMovies />
  )
}
