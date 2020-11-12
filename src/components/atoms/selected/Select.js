import React from 'react'
import PropTypes from 'prop-types'
import { sortArray } from './sort-array/sort-array'
import { generateID } from '../../../modules/generator-id/generator-id'
import Option from './option/Option'

const Select = ({ nameElement, styles, handleInputChange, listOptions, valueElement }) => {
  const arraySort = sortArray(listOptions)

  return (
    <select
      name={nameElement}
      className={styles}
      onChange={handleInputChange}
      data-testid='select-element'
      value={valueElement}
    >
      {
        arraySort.map(element => 
          <Option 
            value={element}
            key={generateID(10)}
          />
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
