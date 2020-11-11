import React from 'react'
import PropTypes from 'prop-types'

const ElementP = ({styles, text}) => {
  return (
    <p
      data-testid='elementP-component'
      className={styles}
    >
      {text}
    </p>
  )
}

ElementP.propTypes = {
  styles: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ElementP
