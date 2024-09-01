import { useState, useRef, useMemo, useCallback } from 'react'
import { getMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setReponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const setMovies = useCallback(async (search) => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const mappedMovies = await getMovies({ search })
      setReponseMovies(mappedMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, setMovies, loading }
}
