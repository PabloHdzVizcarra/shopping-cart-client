import { render, screen } from '@testing-library/react'
import React from 'react'
import ElementP from '../ElementP'

describe('Test ElementP component', () => {

  test('should render correctly with all props', () => {

    render(<ElementP
      styles='p-4'
      text='Any String'
    />)
    
    expect(screen.getByTestId(/paragraph-component/)).toBeInTheDocument()
  })

  test('The value of the text prop, must be equal to the content of the component p element', () => {
    const text = 'Any String'
    render(<ElementP
      styles='p-4'
      text={text}
    />)
    
    expect(
      screen.getByTestId(/paragraph-component/).textContent).toBe(text
    )
  })

  test('The value of the styles prop, must be equal to the classes applied to the element of the component', () => {
    const styles = 'center left'
    render(<ElementP
      styles={styles}
      text='Any string'
    />)

    expect(
      screen.getByTestId(/paragraph-component/).className).toBe(styles
    )

  })
  
})