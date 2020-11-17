import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm/useForm'
import ErrorAlert from '../loginScreen/alerts/alert-message/AlertMessage'
import Input from '../loginScreen/input/Input'
import InputSubmit from '../loginScreen/inputSubmit/InputSubmit'
import { validateFormFieldsRegister } from '../loginScreen/validate-form-fields/validate-form-fields-regster'

const SignIn = () => {
  const history = useHistory()
  const [alerts, setAlerts] = React.useState({
    error: false,
    message: "",
  })

  const [{
    username,
    email,
    password,
    password2
  }, handleInputChange, reset] = useForm({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { error, message } = validateFormFieldsRegister(username, email, password, password2)
    
    if (error) {
      setAlerts({
        error: true,
        message
      })
      return
    }

    setAlerts({
      error: false,
      message: ''
    })

    await fetch('http://localhost:1820/api/auth/register-user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email,
        password,
        username
      })
    })

    reset()
    history.push('/login')
    
  }

  return (
    <div className="flex w-full justify-center min-h-screen">
      <div className="lg:flex grid md:w-8/12 items-center">
        <img
          src="https://images.unsplash.com/photo-1514782831304-632d84503f6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          alt="Tu lista" 
          className="lg:w-6/12 w-12/12 rounded"
        />
        <div
          className="w-full py-10"
        >
          {alerts.error ? <ErrorAlert message={alerts.message} /> : null}
          <h2
            className="text-4xl text-center mb-4"
          >
            Crear cuenta
          </h2>

          <form
            className="mt-20 px-6"
            onSubmit={handleSubmit}
          >
            <Input 
              labelText="Nombre de usuario"
              inputType="text"
              inputName="username"
              handleInputChange={handleInputChange}
              inputValue={username}
            />

            <Input 
              labelText="Email"
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

            <Input 
              labelText="Repite tu password"
              inputType="password"
              inputName="password2"
              handleInputChange={handleInputChange}
              inputValue={password2}
            />

            <InputSubmit 
              inputType="submit"
              inputValue="Registrarte"
            />

          </form>

          <div className="px-6 flex justify-center mt-4">
            <p>Ya tienes una cuenta? pulsa</p>
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-900 ml-1"
            >aqui.</Link> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignIn
