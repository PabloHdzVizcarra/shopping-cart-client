import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'

describe('Test in Button component', () => {

  test('should render correctly with all props', () => {

    render(<Button 
      nameButton="Add"
      text="Add Task"
      handleClick={() => { }}
      styles='center bold'
    />)

    expect(screen.getByTestId(/button-element/)).toBeInTheDocument()
    expect(screen.getByRole(/button/)).toBeInTheDocument()
    expect(screen.getByRole(/button/).textContent).toBe('Add Task')
  })

  test('button element must have the same text passed as prop', () => {
    const text = 'Some String'
    render(<Button 
      nameButton="Add"
      text={text}
      handleClick={() => { }}
      styles='center bold'
    />)
    
    expect(screen.getByRole(/button/).textContent).toBe(text)
  })
  
  test('the button element must have the name attribute equal to the prop named nameButton', () => {
    const name = 'done'
    render(<Button 
      nameButton={name}
      text='Some text'
      handleClick={() => { }}
      styles='center bold'
    />)

    expect(screen.getByRole(/button/).name).toBe(name)

  })

  test('when the button is clicked it should call the function passed as accessory', () => {
    const handleClick = jest.fn(() => {})
    render(<Button 
      nameButton='Added'
      text='Some text'
      handleClick={ handleClick}
      styles='center bold'
    />)

    fireEvent.click(screen.getByRole(/button/))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
})
