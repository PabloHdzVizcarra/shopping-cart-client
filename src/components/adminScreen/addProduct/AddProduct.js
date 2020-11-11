import React from 'react'
import PropTypes from 'prop-types'


const AddProduct = ({ setHideDeleteButton, hideAddButton }) => {
  const [hideElement, setHideElement] = React.useState(true)

  const handleClick = () => {
    setHideDeleteButton(true)
    setHideElement(false)
  }

  if (hideAddButton) return null

  return (
    <>
      { hideElement
          ? <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleClick()}
          >
          Agregar Producto
          </button>
          : <h1>Elemento</h1>
      }  
    </>
    
  )
}

AddProduct.propTypes = {
  setHideDeleteButton: PropTypes.func.isRequired,
  hideAddButton: PropTypes.bool.isRequired,
}

export default AddProduct
