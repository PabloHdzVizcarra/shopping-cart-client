import React from 'react'
import PropTypes from 'prop-types'
import NewProduct from './new-product/NewProduct'
import { useForm } from '../../../hooks/useForm/useForm'
import { useValidateForm } from '../../../hooks/useValidateForm/useValidateForm'

const AddProduct = ({ setHideDeleteButton, hideComponent, nameAdmin, setHideAddButton }) => {
  const [hideElement, setHideElement] = React.useState(true)
  const [values, handleInputChange] = useForm({
    name: '',
    price: '',
    category: '',
    admin: nameAdmin,
    image: ''
  })
  const { name, price, category, image } = values
  const [validateForm, showAlert] = useValidateForm(name, price, category, image)
  
  const handleSubmitForm = (event) => {
    event.preventDefault()
    validateForm()

    if (showAlert.alert || showAlert?.step === 1) {
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

  if (hideComponent) return null

  return (
    <div
      data-testid='add_product'
      className='flex w-11/12 justify-center'
    >
      {showAlert.alert
        ? <p>{showAlert.message}</p>
        : null
      }

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
    </div>
    
  )
}

AddProduct.propTypes = {
  setHideDeleteButton: PropTypes.func.isRequired,
  hideComponent: PropTypes.bool.isRequired,
  nameAdmin: PropTypes.string.isRequired,
}

export default AddProduct
