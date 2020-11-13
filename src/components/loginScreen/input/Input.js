import React from 'react'
import PropTypes from 'prop-types'


const Input = ({ labelText, inputType, inputName, handleInputChange, inputValue }) => {
  return (
    <div
      className="p-2 grid"
      data-testid='input-element'
    >
      <label
        className="text-xl text-green-800"
      >
        {labelText}
      </label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        name={inputName}
        type={inputType}
        className="py-2 bg-gray-300 rounded-lg ml-4 leading-tight text-teal-700 focus:outline-none px-2"
      />
    </div>
  )
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
}

export default Input
