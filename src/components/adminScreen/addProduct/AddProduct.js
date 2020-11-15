import React from 'react'
import PropTypes from 'prop-types'
import NewProduct from './new-product/NewProduct'
import { useForm } from '../../../hooks/useForm/useForm'
import AlertSuccess from '../../atoms/alert/alert-success/AlertSuccess'
import ErrorAlert from '../../loginScreen/alerts/error-alert/ErrorAlert'
import { formValidate } from './form-validate/form-validate'

const AddProduct = ({ setHideDeleteButton, hideComponent, nameAdmin, setHideAddButton }) => {
  const [hideElement, setHideElement] = React.useState(true)
  const [alert, setAlert] = React.useState({
    display: false,
    message: '',
    typeAlert: ''
  })
  const [values, handleInputChange, reset] = useForm({
    name: '',
    price: '',
    category: '',
    admin: nameAdmin,
    image: ''
  })
  const { name, price, category, image } = values
  const handleSubmitForm = (event) => {
    event.preventDefault()
    const { error, display, message } = formValidate(name, price, image, category)

    if (error) {
      console.log('Not validate form')
      setAlert({
        display,
        message
      })
      return null
    }

    console.log('Form is validate')
    setAlert({
      display: false,
      message,
      typeAlert: "success"
    })

    //reset()
  }

  const handleClickButton = (event) => {
    if (event.target.name === 'cancel') {
      setHideElement(true)
      setHideDeleteButton(false)
      return null
    }
    return null
  }

  const handleHideElement = () => {
    setHideDeleteButton(true)
    setHideElement(false)
    setHideAddButton(false)
    return null
  }

  if (hideComponent) return null

  return (
    <div
      data-testid='add_product'
      className='flex w-10/12 flex-col items-center'
    >
      {alert.display
        ? <ErrorAlert 
            message={alert.message}
          />
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
      {
        alert.typeAlert === 'success'
        ? <AlertSuccess 
          message={alert.message}
          secondsHide={2000}
        />
        : null
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
