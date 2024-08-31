import { useEffect, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)}

  useEffect(() => {
    if (search === '') {
      setError('No se puede hacer una busqueda en blanco')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se pueden buscar solo numeros')
      return
    }

    if (search.length < 3) {
      setError('Tiene que ser mayor a tres letras la busqueda')
      return
    }
    setError(null)
  }, [search])
  return {error, search, updateSearch}
}
