import React from 'react'
import PropTypes from 'prop-types'

const Option = ({value}) => {
  return (
    <option
      value={value}
    >
      {value}
    </option>
  )
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Option
