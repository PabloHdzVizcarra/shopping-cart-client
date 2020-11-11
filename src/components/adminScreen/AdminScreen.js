import React from 'react'
import { useAuthState } from '../../context/auth-context'
import ElementH2 from '../atoms/element-h2/ElementH2'
import ElementP from '../atoms/element-p/ElementP'
import AddProduct from './addProduct/AddProduct'
import DeleteProduct from './deleteProduct/DeleteProduct'

const AdminScreen = () => {
  const [hideAddButton, setHideAddButton] = React.useState(false)
  const [hideDeleteButton, setHideDeleteButton] = React.useState(false)
  const { dataUser: { data: { username } } } = useAuthState()

  return (
    <div
      data-testid='AdminScreen-component'
      className="min-h-screen"
    >
      <div
        className="grid gap-4 justify-center"
      >
        <ElementH2 
          styles='text-4xl mt-4'
          text='Pantalla Administrativa'
        />

        <ElementP 
          styles='text-center text-lg'
          text={`Bievenido ${username} que deseas hacer ?`}
        />

        <AddProduct 
          hideAddButton={hideAddButton}
          setHideDeleteButton={setHideDeleteButton}
        />

        <DeleteProduct 
          hideDeleteButton={hideDeleteButton}
          setHideAddButton={setHideAddButton}
        />

      </div>
    </div>
  )
}

export default AdminScreen
