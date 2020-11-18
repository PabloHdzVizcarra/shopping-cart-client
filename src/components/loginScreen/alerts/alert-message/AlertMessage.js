import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const AlertMessage = ({ message, type, color, secondsToHide, change}) => {
  const [hidden, setHidden] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
    }, secondsToHide || 2000)
    
    return () => {
      setHidden(false)
    }
  }, [change, secondsToHide])

  if (hidden) return null

  return (
    <div
      className={`bg-${color}-100 border ml-4 mb-10 border-${color}-400 text-${color}-700 px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">{`${type} ` }</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  )
}

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  secondsToHide: PropTypes.number,
}

export default AlertMessage
