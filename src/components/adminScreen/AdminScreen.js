import React from 'react'
import AddProduct from './addProduct/AddProduct'
import DeleteProduct from './deleteProduct/DeleteProduct'

const AdminScreen = () => {
  return (
    <div
      className="min-h-screen"
    >
      <div
        className="grid gap-4 justify-center"
      >
        <h2
          className="text-4xl mt-4 font-bold"
        >Pantalla Administrativa</h2>

        <AddProduct />
        <DeleteProduct />
      </div>
    </div>
  )
}

export default AdminScreen
