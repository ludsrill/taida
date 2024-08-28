import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'
import { useCatImage } from '../hooks/useCatImage'

export function App () {
  const [fact, setFact] = useState()
  const { catImage } = useCatImage({ fact })

  const generateFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  const handleButton = () => {
    generateFact()
  }

  useEffect(generateFact, [])

  return (
    <main style={{
      display: 'grid',
      placeItems: 'center'
    }}
    >
      <h1>Hellow every nyan!!</h1>
      <button onClick={handleButton}> Generate </button>
      {fact && <p>{fact}</p>}
      <img src={catImage && `https://cataas.com/cat/${catImage}`} alt='Not available cat image' />
    </main>

  )
}
