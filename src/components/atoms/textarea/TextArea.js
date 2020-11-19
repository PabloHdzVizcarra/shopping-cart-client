import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({name, rows, cols, value, styles, handleInputChange}) => {
  return (
    <textarea
      name={name}
      rows={rows}
      cols={cols}
      value={value}
      className={styles}
      onChange={handleInputChange}
    >

    </textarea>
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string.isRequired,
  styles: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
}

export default TextArea
