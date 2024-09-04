export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const initialState = []
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(
        item => item.id === id
      )
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }
      const newCart = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }]
      updateLocalStorage(newCart)
      return newCart
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newCart = state.filter(item => item.id !== id)
      updateLocalStorage(newCart)
      return newCart
    }

    case 'CLEAR_CART': {
      updateLocalStorage(initialState)
      return initialState
    }
  }

  return state
}
