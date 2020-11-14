import React from 'react'
import PropTypes from 'prop-types'

const AlertSuccess = ({ message, secondsHide }) => {
  const [itShow, setItShow] = React.useState(true)

  setTimeout(() => {
    setItShow(false)
  }, secondsHide || 1000)

  React.useEffect(() => {
    return () => {
      setItShow(false)
    }
  })

  if (!itShow) return null

  return (
    <div
      className="absolute bottom-0 right-0 mb-2 mr-2 alert flex flex-row items-center bg-green-200 p-1 rounded border-b-2 border-green-300"
      role='alert'
    >
      <div className="alert-content ml-4">
        <div className="alert-title font-semibold text-lg text-green-800">
          Success
        </div>
        <div className="alert-description text-sm text-green-600">
          {message}
        </div>
      </div>
    </div>
  )
}

AlertSuccess.propTypes = {
  message: PropTypes.string.isRequired,
  secondsHide: PropTypes.number
}

export default AlertSuccess
