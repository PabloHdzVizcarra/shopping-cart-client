import { urlValidate } from "../helpers/url-validate/url-validate"

export const formValidate = (name, price, image, category) => {

  if (name.length <= 3) {
    return ({
      error: true,
      message: 'El nombre no puede ser menor a 3 caracteres'
    })
  }

  if (parseInt(price) < 0 || isNaN(parseInt(price))) {
    return ({
      error: true,
      message: 'El articulo tiene que tener un valor valido'
    })
  }
  

  if (!urlValidate(image)) {
    return ({
      error: true,
      message: 'La url que ingresaste no es valida'
    })
  }

  if (category === '') {
    return ({
      error: true,
      message: 'Debes seleccionar una categoria'
    })
  }

  return ({
    error: false,
    message: 'Articulo guardado con exito'
  })

}