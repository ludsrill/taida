export const getMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=c4e3bd5a`)
    const responseJson = await response.json()

    const movies = responseJson.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
