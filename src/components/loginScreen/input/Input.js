import React from 'react'
import PropTypes from 'prop-types'


function Input({ labelText, inputType }) {
  return (
    <div
      className="p-2 grid"
    >
      <label
        className="text-xl text-green-900"
      >{labelText}</label>
      <input
        type={inputType}
        className="py-2 bg-gray-300 rounded-lg ml-4 leading-tight text-teal-700 focus:outline-none px-2"
      />
    </div>
  )
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
}

export default Input
