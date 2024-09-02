import { useContext, useState } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters } = useContext(FiltersContext)
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          product.category === filters.category ||
            filters.category === 'all'
        )
      )
    })
  }
  return { filterProducts }
}
