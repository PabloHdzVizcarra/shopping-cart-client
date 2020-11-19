import React from 'react'
import PropTypes from 'prop-types'

const Label = ({elementStyles, text}) => {
  return (
    <label
      className={elementStyles}
    >
      {text}
    </label>
  )
}

Label.propTypes = {
  elementStyles: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Label
