import { useState } from "react"

export const useValidateForm = () => {
  const [showAlert, setShowAlert] = useState({
    alert: false,
    message: ''
  })
  const [data, setData] = useState({})

  function validateUrl(url) {
    const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/;
    return re.test(url)
  }

  const validateForm = (...values) => {
    
    if (values[0].length <= 3) {
      setShowAlert({
        alert: true,
        message: 'El nombre no puede ser menor a 3 caracteres'
      })
      return null
    }

    if (values[1] <= 0) {
      setShowAlert({
        alert: true,
        message: 'El articulo tiene que tener un valor valido'
      })
      return null
    }
    

    if (!validateUrl(values[2])) {
      setShowAlert({
        alert: true,
        message: 'La url que ingresaste no es valida'
      })
      return null
    }

    if (values[3] === '') {
      setShowAlert({
        alert: true,
        message: 'Debes seleccionar una categoria'
      })
      return null
    }

    setShowAlert({
      alert: false,
      message: ''
    })
  }
  
  return [validateForm, showAlert, data]
}