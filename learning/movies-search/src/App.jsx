import './App.css'
import { Movie } from './components/Movie'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { error, updateSearch, search } = useSearch()
  const { movies, setMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      setMovies(search)
    }, 300), [setMovies])

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avangers, Dart vader' />
          <input type='checkbox' onChange={handleSort} check={sort} />
          <button type='submit'>Buscar</button>
        </form>
        <p>{error}</p>
      </header>

      <main>
        {loading ? 'Cargando...' : <Movie movies={movies} />}
      </main>
    </div>
  )
}

export default App
