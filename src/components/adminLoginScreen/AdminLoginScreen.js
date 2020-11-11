import React from 'react'
import { useAuthState } from '../../context/auth-context'
import { useForm } from '../../hooks/useForm/useForm'
import ErrorAlert from '../loginScreen/alerts/error-alert/ErrorAlert'
import Input from '../loginScreen/input/Input'
import InputSubmit from '../loginScreen/inputSubmit/InputSubmit'

const AdminLoginScreen = () => {
  const [alerts, setAlerts] = React.useState({
    error: false,
    message: "",
  })

  const { setAdminUser } = useAuthState()
  
  const [{ name, password }, handleInputChange] = useForm({
    name: "pablo",
    password: "123456",    
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const resp = await fetch('/api/v1/log-admin-users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        username: name.toLowerCase(),
        password
      }),
    })
    const data = await resp.json()

    if (data?.error) {
      setAlerts({
        error: true,
        message: "Ocurrio un error inesperado"
      })
    }

    setAdminUser(data.userData)
    return null
  }


  return (
    <div>
      <div className="flex w-full justify-center min-h-screen">
      <div className="lg:flex grid md:w-8/12 items-center">
        <div className="w-full py-10">
          {alerts.error ? <ErrorAlert message={alerts.message} /> : null}

          <h2 className="text-4xl text-center mb-4">Administradores</h2>

          <form onSubmit={handleSubmit} className="mt-20 px-6">
            <Input
              labelText="Nombre de usuario"
              inputType="text"
              inputName="name"
              handleInputChange={handleInputChange}
              inputValue={name}
            />

            <Input
              labelText="Password"
              inputType="password"
              inputName="password"
              handleInputChange={handleInputChange}
              inputValue={password}
            />

            <InputSubmit inputType="submit" inputValue="Login" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}


export default AdminLoginScreen