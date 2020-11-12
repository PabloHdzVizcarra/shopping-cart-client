import React from 'react'
import PropTypes from 'prop-types'
import NewProduct from './new-product/NewProduct'
import { useForm } from '../../../hooks/useForm/useForm'

const AddProduct = ({ setHideDeleteButton, hideAddButton, nameAdmin, setHideAddButton }) => {
  const [hideElement, setHideElement] = React.useState(true)

  const [values, handleInputChange] = useForm({
    name: '',
    price: '',
    category: '',
    admin: nameAdmin,
    image: ''
  })

  const handleClickButton = (event) => {
    console.log("Presionaste Agregar")
    if (event.target.name === 'cancel') {
      console.log('Presionaste Cancelar')
      setHideElement(true)
      setHideDeleteButton(false)
    }
  }

  const handleHideElement = () => {
    console.log('Presionaste Agregar Producto')
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
          />
      } 
    </>
    
  )
}

AddProduct.propTypes = {
  setHideDeleteButton: PropTypes.func.isRequired,
  hideAddButton: PropTypes.bool.isRequired,
}

export default AddProduct
