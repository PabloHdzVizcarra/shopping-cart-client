import React from 'react'
import PropTypes from 'prop-types'


const ButtonDelete = ({ handleDelete, text }) => {
  return (
    <button
      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      data-testid="delete-btn"
      onClick={() => handleDelete()}
    >
      {text}
    </button>

  )
}

ButtonDelete.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default ButtonDelete