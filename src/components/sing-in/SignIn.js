import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../loginScreen/input/Input'
import InputSubmit from '../loginScreen/inputSubmit/InputSubmit'

const SignIn = () => {
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
          <h2
            className="text-4xl text-center mb-4"
          >
            Crear cuenta
          </h2>

          <form
            className="mt-20 px-6"
          >
            <Input 
              labelText="Nombre de usuario"
              inputType="text"
            />

            <Input 
              labelText="Email"
              inputType="text"
            />

            <Input 
              labelText="Password"
              inputType="password"
            />

            <Input 
              labelText="Repite tu password"
              inputType="password"
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
