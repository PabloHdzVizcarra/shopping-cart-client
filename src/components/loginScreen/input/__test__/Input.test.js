import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from '../Input'
import userEvent from '@testing-library/user-event'

describe('Test in Input component', () => {
  const labelText = 'Distro'
  const inputType = 'text'
  const inputName = 'distro'
  const handleInputChange = jest.fn().mockReturnValue({values: 'success'})
  const inputValue = ''

  const renderComponent = () => {
    return render(<Input 
      labelText={labelText}
      inputName={inputName}
      inputType={inputType}
      handleInputChange={handleInputChange}
      inputValue={inputValue}
    />)
  }

  test('should render conrrectly with all props', () => {
    renderComponent()
    expect(screen.getByRole(/textbox/)).toBeInTheDocument()
    expect(screen.getByTestId(/input-element/)).toBeInTheDocument()
    
  })

  test('the label element must have the same content value as the labelText prop', () => {
    renderComponent()
    expect(screen.getByText(/Distro/).textContent).toBe(labelText)
  })
  
  test('the name attribute of the input must be the same as the value of the inputName prop', () => {
    renderComponent()
    expect(screen.getByRole(/textbox/).name).toBe(inputName)
  })

  test('the type attribute of the input must be the same as the value of the inputType prop', () => {
    renderComponent()
    expect(screen.getByRole(/textbox/).type).toBe(inputType)
  })
  
  test('if the input value is modified, you must call the handleInputChange function', () => {
    renderComponent()
    userEvent.type(screen.getByRole(/textbox/), 'Pop OS')
    expect(handleInputChange).toHaveBeenCalled()
  })
  
})
