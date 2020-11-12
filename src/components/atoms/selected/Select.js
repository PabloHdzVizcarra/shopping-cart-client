import React from 'react'
import PropTypes from 'prop-types'
import { sortArray } from './sort-array/sort-array'

const Select = ({ nameElement, styles, handleInputChange, listOptions }) => {
  
  const arraySort = sortArray(listOptions)

  return (
    <select
      name={nameElement}
      className={styles}
      onChange={handleInputChange}
      data-testid='select-element'
    >
      {
        arraySort.map(element => 
          <option value={element}>{element}</option>
        )
      }
    </select>
  )
}

Select.propTypes = {
  nameElement: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  listOptions: PropTypes.array.isRequired,
}

export default Select
