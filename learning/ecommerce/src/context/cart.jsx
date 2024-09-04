import { useReducer, createContext } from 'react'
import { cartReducer } from '../reducers/cartReducer'
export const CartContext = createContext()

export function CartProvider ({ children }) {
  const initialState = []
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
