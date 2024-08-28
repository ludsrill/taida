import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=5&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        setCatImage(_id)
      })
  }, [fact])

  return { catImage }
}
