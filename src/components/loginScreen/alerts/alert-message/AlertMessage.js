import React from 'react'
import PropTypes from 'prop-types'

const AlertMessage = ({message, type, color}) => {
  return (
    <div
      className={`bg-${color}-100 border ml-4 mb-10 border-${color}-400 text-${color}-700 px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">{`${type} - ` }</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  )
}

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default AlertMessage