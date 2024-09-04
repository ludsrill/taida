import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons.jsx'
import './Cart.css'
import { useCart } from './useCart.jsx'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product =>
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <strong>{product.title}</strong>
                </div>
                <footer>
                  <small>Qty: {product.quantity}</small>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
              </li>)
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
