import {useState} from 'react'

export const useShowAlerts = () => {
  const [alert, setAlert] = useState({
    display: false,
    message: '',
    alertType: {
      color: '',
      type: ''
    }
  })

  const createAlert = (message, color, type) => {
    setAlert({
      display: true,
      message,
      alertType: {
        color,
        type
      }
    })
    return null
  }

  return [createAlert, alert]
}