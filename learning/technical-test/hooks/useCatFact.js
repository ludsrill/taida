import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const generateFact = async () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  useEffect(generateFact, [])
  return { fact, generateFact }
}
