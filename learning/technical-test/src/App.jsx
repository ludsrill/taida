import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'

export function App () {
  const { fact, generateFact } = useCatFact()
  const { catImage } = useCatImage({ fact })

  const handleButton = async () => {
    await generateFact()
  }

  return (
    <main style={{
      display: 'grid',
      placeItems: 'center'
    }}
    >
      <h1>Hellow every nyan!!</h1>
      <button onClick={handleButton}> Generate </button>
      {fact && <p>{fact}</p>}
      {catImage && <img src={`https://cataas.com/cat/${catImage}`} alt='Not available cat image' />}
    </main>

  )
}
