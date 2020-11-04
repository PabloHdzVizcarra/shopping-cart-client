import React from 'react'
import PropTypes from 'prop-types'

function InputSubmit({inputType, inputValue}) {
  return (
    <div>
      <input
        type={inputType}
        value={inputValue}
        className="text-white text-lg font-bold  cursor-pointer py-2 w-full mt-4 rounded-md bg-teal-500 hover:bg-teal-600 focus:shadow-outline focus:outline-none shadow-lg transition duration-300 ease-in-out"
      />
    </div>
  )
}

InputSubmit.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
}

export default InputSubmit


