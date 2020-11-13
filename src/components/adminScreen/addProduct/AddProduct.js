import React from 'react'
import PropTypes from 'prop-types'
import NewProduct from './new-product/NewProduct'
import { useForm } from '../../../hooks/useForm/useForm'
import { useValidateForm } from '../../../hooks/useValidateForm/useValidateForm'

const AddProduct = ({ setHideDeleteButton, hideAddButton, nameAdmin, setHideAddButton }) => {
  const [hideElement, setHideElement] = React.useState(true)

  const [values, handleInputChange] = useForm({
    name: '',
    price: '',
    category: '',
    admin: nameAdmin,
    image: ''
  })

  const [validateForm, showAlert] = useValidateForm()

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const { name, price, image, category } = values
    validateForm(name, price, image, category)

    if (showAlert.alert) {
      console.log('Tienes errores')
      return null
    }
    console.log('no tienes errores')

  }

  const handleClickButton = (event) => {
    if (event.target.name === 'cancel') {
      setHideElement(true)
      setHideDeleteButton(false)
      return null
    }
    console.log(values)
  }

  const handleHideElement = () => {
    setHideDeleteButton(true)
    setHideElement(false)
    setHideAddButton(false)
  }

  if (hideAddButton) return null

  return (
    <>
      { hideElement
          ? <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleHideElement()}
            >
            Agregar Producto
            </button>
        : <NewProduct 
            values={values}
            handleInputChange={handleInputChange}
            handleClickButton={handleClickButton}
            handleSubmitForm={handleSubmitForm}
          />
      } 
    </>
    
  )
}

AddProduct.propTypes = {
  setHideDeleteButton: PropTypes.func.isRequired,
  hideAddButton: PropTypes.bool.isRequired,
  nameAdmin: PropTypes.string.isRequired,
}

export default AddProduct
