import React from 'react'
import { render, screen } from '@testing-library/react'
import Select from '../Select'
import userEvent from '@testing-library/user-event'

describe('Test in Select component', () => {
  const nameElement = 'category'
  const styles = 'center bold'
  const handleInputChange = jest.fn(() => { })
  const listOptions = ['ubuntu', 'xubuntu', 'lubuntu', 'kubuntu', 'ubuntu budgie']


  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render correctly with all props', () => {
    render(<Select 
      nameElement={nameElement}
      styles={styles}
      handleInputChange={handleInputChange}
      listOptions={listOptions}
    />)
    
    expect(screen.getByTestId(/select-element/)).toBeInTheDocument()
    expect(screen.getByRole(/combobox/)).toBeInTheDocument()
    expect(screen.getByRole(/combobox/).name).toBe(nameElement)
  })

  test('the number of option elements, muts be equal to the length of the listOptions prop', () => {
    render(<Select 
      nameElement={nameElement}
      styles={styles}
      handleInputChange={handleInputChange}
      listOptions={listOptions}
    />)

    expect(screen.getAllByRole(/option/).length).toBe(listOptions.length)
  })

  test('if an option is selected, the value of the name attribute of the select must be changed', () => {
    render(<Select 
      nameElement={nameElement}
      styles={styles}
      handleInputChange={handleInputChange}
      listOptions={listOptions}
    />)

    userEvent.selectOptions(screen.getByTestId(/select-element/), 'xubuntu')
    expect(handleInputChange).toHaveBeenCalled()
    expect(screen.getByRole(/combobox/).value).toBe('xubuntu')
    expect(screen.getByText('xubuntu').selected).toBe(true)
    expect(screen.getByText('kubuntu').selected).toBe(false)
  })
  
  
})
