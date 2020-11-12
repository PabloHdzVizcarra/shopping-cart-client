import React from 'react'

const DeleteProduct = ({ hideDeleteButton, setHideAddButton, setHideDeleteButton }) => {
  const [hideElement, setHideElement] = React.useState(false)

  const handleClick = () => {
    setHideElement(true)
    setHideAddButton(true)
    setHideDeleteButton(false)
  }

  const handleClose = () => {
    setHideElement(false)
    setHideAddButton(false)
  }
  
  if (hideDeleteButton) return null

  return (
    <>
      {
        !hideElement
          ? <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick()}
            >
              Eliminar Producto
            </button >
          
          : <div>
              <h2>Eliminar un producto desde la DB</h2>
              <h2>Eliminar un producto desde la DB</h2>
              <h2>Eliminar un producto desde la DB</h2>
              <h2>Eliminar un producto desde la DB</h2>
              <h2>Eliminar un producto desde la DB</h2>
              <button
                onClick={handleClose}
              >
                Cancelar
              </button>
            
            </div>
      }
    </>
    
  )
}

export default DeleteProduct
