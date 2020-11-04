import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/use_Fetch/useForm";
import Input from "./input/Input";
import InputSubmit from "./inputSubmit/InputSubmit";

const LoginScreen = () => {
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formValues)
    reset()
    
    console.log('submit')
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
          <h2
            className="text-4xl text-center mb-4"
          >
            Inicia Sesion
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-20 px-6"
          >
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

            <InputSubmit 
              inputType="submit"
              inputValue="Login"
            />

          </form>

          <div className="px-6 flex justify-center mt-4">
            <p>No tienes cuenta? puedes crear una pulsando</p>
            <Link
              to="/login/sign-in"
              className="text-blue-600 hover:text-blue-900 ml-1"
            >aqui.</Link> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginScreen;
