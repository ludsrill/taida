import { useContext, useId } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filters'

export function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const minPriceFilterId = useId()
  const cantgoryFilterId = useId()

  const handleRangePrice = (event) => {
    setFilters(previousState => ({
      ...previousState,
      minPrice: event.target.value
    }))
  }

  const handleSelection = (event) => {
    setFilters(previousState => ({
      ...previousState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleRangePrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={cantgoryFilterId}>Categoria</label>
        <select id={cantgoryFilterId} onChange={handleSelection} value={filters.category}>
          <option value='all'>Todas</option>
          <option value='beauty'>Belleza</option>
          <option value='fragrances'>Perfumes</option>
          <option value='furniture'>Muebles</option>
          <option value='groceries'>Alimentos</option>
        </select>
      </div>
    </section>
  )
}
