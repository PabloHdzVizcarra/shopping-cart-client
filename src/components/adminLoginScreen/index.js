import React from 'react'
import { useForm } from '../../hooks/useForm/useForm'
import ErrorAlert from '../loginScreen/alerts/error-alert/ErrorAlert'
import Input from '../loginScreen/input/Input'
import InputSubmit from '../loginScreen/inputSubmit/InputSubmit'

export const AdminLoginScreen = () => {
  const [alerts, setAlerts] = React.useState({
    error: false,
    message: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
  }

  const [{ email, password }, handleInputChange, reset] = useForm({
    email: "",
    password: "",    
  })

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
              inputName="email"
              handleInputChange={handleInputChange}
              inputValue={email}
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
