import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import isEmpty from 'validator/lib/isEmpty'
import equals from 'validator/lib/equals'

export const validateFormFieldsRegister = (username, email, password, password2) => {
  const errors = {
    error: false,
    message: ''
  }

  if (isEmpty(username)) {
    errors.error = true
    errors.message = "Ups olvidaste ingresar un nombre de usuario"
    return errors
  }
  if (!isLength(username, {min: 3})) {
    errors.error = true
    errors.message = "Ups el nombre de usuario no puede ser menor a 3 caracteres"
    return errors
  }

  if (isEmpty(email)) {
    errors.error = true
    errors.message = "No ingresaste ningun email, por favor ingresa uno"
    return errors
  }
  
  if (!isEmail(email)) {
    errors.error = true
    errors.message = "El email que ingresaste no es valido"
    return errors
  }

  if (isEmpty(password)) {
    errors.error = true
    errors.message = "Ups olvidaste ingresar el password"
    return errors
  }
  if (isEmpty(password2)) {
    errors.error = true
    errors.message = "Ups olvidaste confirmar el password"
    return errors
  }

  if (!equals(password, password2)) {
    errors.error = true
    errors.message = "La password no son iguales"
    return errors
  }

  return errors
}