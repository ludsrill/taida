import './App.css'
import { Movie } from './components/Movie'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { movies: mappedMovies } = useMovies()
  const { error, updateSearch, search } = useSearch()

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input onChange={handleChange} value={search} name='query' placeholder='Avangers, Dart vader' />
          <button type='submit'>Buscar</button>
        </form>
        <p>{error}</p>
      </header>

      <main>
        <Movie movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
