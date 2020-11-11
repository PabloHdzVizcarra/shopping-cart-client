import React from 'react'

const DeleteProduct = ({ hideDeleteButton, setHideAddButton }) => {
  const handleClick = () => {
    setHideAddButton(true)
  }
  
  if (hideDeleteButton) return null

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleClick()}
    >
      Eliminar Producto
    </button>
  )
}

export default DeleteProduct
