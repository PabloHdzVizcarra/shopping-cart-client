import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import isEmpty from 'validator/lib/isEmpty'

export const validateFormFields = (email, password) => {
  const errors = {
    error: false,
    message: ''
  }

  if (isEmpty(email)) {
    errors.error = true
    errors.message = "No ingresaste ningun email, por favor ingresa uno"
    return errors
  }
  if (isEmpty(password)) {
    errors.error = true
    errors.message = "Ups olvidaste ingresar el password"
    return errors
  }

  if (!isEmail(email)) {
    errors.error = true
    errors.message = "El email que ingresaste no es valido"
    return errors
  }
  if (!isLength(password, {min: 6})) {
    errors.error = true
    errors.message = "La password no puede ser menor a 6 caracteres"
    return errors
  }

  return errors
}