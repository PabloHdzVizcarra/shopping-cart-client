import React from 'react'
import PropTypes from 'prop-types'

const ElementH2 = ({text, styles}) => {
  return (
    <h2
      data-tesid={'h2-component'}
      className={styles}
    >
      {text}
    </h2>
  )
}

ElementH2.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
}

export default ElementH2
