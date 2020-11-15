import React from 'react'

export const useValidateForm = (name, price, category, image) => {
  const [showAlert, setShowAlert] = React.useState({
    alert: false,
    succesAlert: {
      display: false,
      message: ''
    },
    message: '',
    step: 1
  })

  function validateUrl(url) {
    
  }

  const validateForm = () => {
    
    
    return null
  }
  
  return [validateForm, showAlert]
}