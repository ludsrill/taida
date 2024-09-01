import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
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

  return { error, search, updateSearch }
}
