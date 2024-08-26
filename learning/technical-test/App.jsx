import { useState, useEffect } from 'react'

// const CAT_API = ``
export function App () {
  const [fact, setFact] = useState()
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        const firstWord = data.fact.split(' ', 2).join()
        setFact(data.fact)
        fetch(`https://cataas.com/cat/says/${firstWord}?size=5&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { _id } = response
            setCatImage(_id)
          })
      }
      )
  }, [])

  return (
    <main style={{
      display: 'grid',
      placeItems: 'center'
    }}
    >
      <h1>Hellow every nyan!!</h1>
      {fact && <p>{fact}</p>}
      <img src={catImage && `https://cataas.com/cat/${catImage}`} alt='Not available cat image' />
    </main>

  )
}
