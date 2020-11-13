import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ styles, handleClick, text, nameButton }) => {
  return (
    <button
      className={styles}
      onClick={(event) => handleClick(event)}
      name={nameButton}
      data-testid='button-element'
      type='button'
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  styles: PropTypes.string,
  nameButton: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Button
