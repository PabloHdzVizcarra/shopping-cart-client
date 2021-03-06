import React from 'react'
import PropTypes from 'prop-types'
import NewProduct from './new-product/NewProduct'
import { useForm } from '../../../hooks/useForm/useForm'
import AlertMessage from '../../loginScreen/alerts/alert-message/AlertMessage'
import { formValidate } from './form-validate/form-validate'
import { arrayCheckErrors } from './helpers/check-errors/arrayCheckErrors'
import { useShowAlerts } from '../../../hooks/useShowAlerts/useShowAlerts'

const AddProduct = ({ setHideDeleteButton, hideComponent, nameAdmin, setHideAddButton }) => {
  const [hideElement, setHideElement] = React.useState(true)
  const [values, handleInputChange, reset] = useForm({
    name: '',
    price: '',
    category: '',
    admin: nameAdmin,
    image: '',
    description: ''
  })
  const [createAlert, alert] = useShowAlerts()
  const [change, setChange] = React.useState(true)
  const { name, price, category, image } = values

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    setChange(change => ! change)
    const { error, message } = formValidate(name, price, image, category)

    if (error) return createAlert(message, 'red', 'Error')

    try {
      console.log(values)
      const response = await fetch('/api/v1/admin/create-article', {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await response.json()

      if (arrayCheckErrors(data.errors)) return createAlert(data.errors[0], 'red', 'type')

      reset() // reset form
      createAlert(message, 'green', 'Success')
      return null
    } catch (error) {
      createAlert(error.message, 'red', 'Error')
      return console.log(error)
    }

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
        ? <AlertMessage
            message={alert.message}
            type={alert.alertType.type}
            color={alert.alertType.color}
            change={change}
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

    </div>

  )
}

AddProduct.propTypes = {
  setHideDeleteButton: PropTypes.func.isRequired,
  hideComponent: PropTypes.bool.isRequired,
  nameAdmin: PropTypes.string.isRequired,
}

export default AddProduct
