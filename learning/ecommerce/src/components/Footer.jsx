import './Footer.css'
import { FiltersContext } from '../context/filters'
import { useContext } from 'react'
import { useCart } from './useCart'

export function Footer () {
  const { cart } = useCart()
  const { filters } = useContext(FiltersContext)
  return (
    <footer className='footer'>
      Luis
    </footer>
  )
}
