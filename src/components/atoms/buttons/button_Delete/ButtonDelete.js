import React from 'react'

const ButtonDelete = ({handleDelete}) => {
  return (
    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      onClick={() => handleDelete()}
    >
      Eliminar
    </button>

  )
}

export default ButtonDelete