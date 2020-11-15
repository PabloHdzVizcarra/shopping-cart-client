import React from 'react'
import { render, screen } from '@testing-library/react'
import AddProduct from '../AddProduct'
import userEvent from '@testing-library/user-event'

describe('Test in AddProduct component', () => {
  const setHideDeleteButton = jest.fn(() => {})
  const setHideAddButton = jest.fn()

  const renderComponent = (arg) => {
    const hideComponent = arg || false
    const nameAdmin = "Linus Torvalds"

    return render(<AddProduct
      setHideAddButton={setHideAddButton}
      setHideDeleteButton={setHideDeleteButton}
      hideComponent={hideComponent}
      nameAdmin={nameAdmin}
    />)
  }

  test('the component should only render a button element', () => {
    renderComponent()
    expect(screen.getByRole(/button/)).toBeInTheDocument()
    expect(screen.getByTestId(/add_product/)).toBeInTheDocument()
  })

  test('the hideComponent accesory is passed with a value of true, it will only render a div element', () => {
    renderComponent(true)
    expect(screen.queryByTestId(/add_product/)).toBeFalsy()
  })
  
  test('the -Agregar Producto- button is pressed, the NewProduct component should be rendered', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    expect(screen.getByTestId(/new_product/)).toBeInTheDocument()
  })

  test('the -Add Product- button is pressed, you must call the setHideDeleteButton as setHideAddButton funcions', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    expect(setHideDeleteButton).toHaveBeenCalled()
    expect(setHideAddButton).toHaveBeenCalled()
  })

  test('the input element is filled in the wrong way with the name attribute, an alert should be displayed indicating the error', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    userEvent.type(screen.getAllByRole(/textbox/)[0], 'U')
    userEvent.click(screen.getByText(/Agregar/))
    expect(screen.getByRole(/alert/)).toBeInTheDocument()
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })

  test('the input element is filled in the wrong way with the price attribute, an alert should be displayed indicating the error', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    userEvent.type(screen.getAllByRole(/textbox/)[0], 'Ubuntu')
    userEvent.type(screen.getAllByRole(/textbox/)[1], 'free')
    userEvent.click(screen.getByText(/Agregar/))
    expect(screen.getByRole(/alert/)).toBeInTheDocument()
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })

  test('the input element is filled in the wrong way with the image attribute, an alert should be displayed indicating the error', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    userEvent.type(screen.getAllByRole(/textbox/)[0], 'Ubuntu')
    userEvent.type(screen.getAllByRole(/textbox/)[1], '10')
    userEvent.type(screen.getAllByRole(/textbox/)[2], 'someUrl')
    userEvent.click(screen.getByText(/Agregar/))
    expect(screen.getByRole(/alert/)).toBeInTheDocument()
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })

  test('if no category is selected in select element, it should show error alert', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    userEvent.type(screen.getAllByRole(/textbox/)[0], 'Ubuntu')
    userEvent.type(screen.getAllByRole(/textbox/)[1], '10')
    userEvent.type(screen.getAllByRole(/textbox/)[2], 'www.cloudinary.com')
    userEvent.type(screen.getByRole(/combobox/), '')
    userEvent.click(screen.getByText(/Agregar/))
    expect(screen.getByRole(/alert/)).toBeInTheDocument()
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })

  test('if all the data entered is valid, it should show a success alert', () => {
    renderComponent()
    userEvent.click(screen.getByRole(/button/))
    const completeForm = () => {
      
      userEvent.type(screen.getAllByRole(/textbox/)[0], 'Ubuntu')
      userEvent.type(screen.getAllByRole(/textbox/)[1], '10')
      userEvent.type(screen.getAllByRole(/textbox/)[2], 'www.cloudinary.com')
      userEvent.selectOptions(screen.getByRole(/combobox/), 'general')
      userEvent.click(screen.getByText(/Agregar/))
    }

    completeForm()
    expect(screen.getByRole(/alert/)).toBeInTheDocument()
    expect(screen.getByText(/success/i)).toBeInTheDocument()
  })
  
})