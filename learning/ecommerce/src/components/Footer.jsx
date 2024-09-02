import './Footer.css'
import { FiltersContext } from '../context/filters'
import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function Footer () {
  const { cart } = useContext(CartContext)
  const { filters } = useContext(FiltersContext)
  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}
      {cart}
    </footer>
  )
}
