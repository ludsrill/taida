import { AddToCartIcon, ClearCartIcon, RemoveFromCartIcon } from './icons'
import './Products.css'
import { useCart } from './useCart'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button onClick={
                () => checkProductInCart(product)
                  ? removeFromCart(product)
                  : addToCart(product)
                }
              >
                {checkProductInCart(product) ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </div>
          </li>
        ))}
      </ul>

    </main>
  )
}
