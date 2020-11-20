import { urlValidate } from "../helpers/url-validate/url-validate"

export const formValidate = (name, price, image, category, description) => {
  if (name.length <= 3) {
    return ({
      error: true,
      message: 'El nombre no puede ser menor a 3 caracteres'
    })
  }

  if (parseInt(price) < 0 || isNaN(parseInt(price))) {
    return ({
      error: true,
      message: 'El articulo tiene que tener un precio valido'
    })
  }

  if (!urlValidate(image)) {
    return ({
      error: true,
      message: 'La url de la imagen que ingresaste no es valida'
    })
  }

  if (category === '' || category === '---') {
    return ({
      error: true,
      message: 'Debes seleccionar una categoria'
    })
  }

  if (description === '' || description.length === 10) {
    return ({
      error: true,
      message: 'Por favor agrega una descripcion valida, recuerda que debe ser mayor a 10 caracteres'
    })
  }

  return ({
    error: false,
    message: 'Articulo guardado con exito'
  })

}