import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({styles, name}) => {
  return (
    <button
      type="submit"
      className={styles}
      data-testid="submit_button"
    >
      {name}
    </button>
  )
}

SubmitButton.propTypes = {
  styles: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default SubmitButton
