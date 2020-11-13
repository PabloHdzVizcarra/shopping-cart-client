import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import NewProduct from '../NewProduct'
import userEvent from '@testing-library/user-event'

describe('Test in NewProduct', () => {
  const values = {
    name: 'PopOS',
    price: 'free',
    image: 'www.system76.com',
    category: 'Ubuntu'
  }
  const handleInputChange = jest.fn(() => {})
  const handleClickButton = jest.fn(() => {})
  const handleSubmitForm = jest.fn((e => e.preventDefault()))

  test('should render correctly with all props', () => {
    render(<NewProduct 
      handleInputChange={handleInputChange}
      handleClickButton={handleClickButton}
      handleSubmitForm={handleSubmitForm}
      values={values}
    />)

    expect(screen.getByTestId(/NewProduct-component/)).toBeInTheDocument()
  })

  test('the component should render following internal components', () => {
    render(<NewProduct 
      handleInputChange={handleInputChange}
      handleClickButton={handleClickButton}
      handleSubmitForm={handleSubmitForm}
      values={values}
    />)

    expect(screen.getByTestId(/h2-component/)).toBeInTheDocument()
    expect(screen.getByTestId(/select-element/)).toBeInTheDocument()
    expect(screen.getByTestId(/button-element/)).toBeInTheDocument()
    expect(screen.getByTestId(/submit_button/)).toBeInTheDocument()
    expect(screen.getAllByTestId(/input-element/).length).toBe(3)
  })
  
  test('if any input is pressed, it should call the handleInputChange function', () => {
    render(<NewProduct 
      handleInputChange={handleInputChange}
      handleClickButton={handleClickButton}
      handleSubmitForm={handleSubmitForm}
      values={values}
    />)

    userEvent.type(screen.getAllByRole(/textbox/)[0], 'Pizza')
    userEvent.type(screen.getAllByRole(/textbox/)[1], '150')
    userEvent.type(screen.getAllByRole(/textbox/)[2], 'example.com')
    expect(handleInputChange).toHaveBeenCalled()
  })

  test('if the button Agregar is clicked, it must call the handleSubmitForm function', () => {
    render(<NewProduct 
      handleInputChange={handleInputChange}
      handleClickButton={handleClickButton}
      handleSubmitForm={handleSubmitForm}
      values={values}
    />)
    fireEvent.submit(screen.getByText(/Agregar/))
    expect(handleSubmitForm).toHaveBeenCalled()
  })

  test('if the button Cancelar is clicked, it must call the handleClickButton function', () => {
    render(<NewProduct 
      handleInputChange={handleInputChange}
      handleClickButton={handleClickButton}
      handleSubmitForm={handleSubmitForm}
      values={values}
    />)
    userEvent.click(screen.getByText(/Cancelar/))
    expect(handleClickButton).toHaveBeenCalled()
  })
  
    
})
