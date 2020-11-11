import { render, screen } from '@testing-library/react'
import React from 'react'
import ElementH2 from '../ElementH2'

describe('Test ElementH2 component', () => {

  test('should render correctly with all props', () => {

    render(<ElementH2
      styles='p-4'
      text='Elemento H2'
    />)
    
    expect(screen.getByTestId(/h2-component/)).toBeInTheDocument()
    expect(screen.getByRole(/heading/)).toBeInTheDocument()
  })

  test('The value of the text prop, must be equal to the content of the component h2 element', () => {
     const text = 'Any String'
    render(<ElementH2
      styles='p-4'
      text={text}
    />)
    
    expect(screen.getByRole(/heading/).textContent).toBe(text)
  })

  test('The value of the styles prop, must be equal to the classes applied to the element of the component', () => {
    const styles = 'center left'
    render(<ElementH2
      styles={styles}
      text='Any string'
    />)
    
    expect(screen.getByRole(/heading/).className).toBe(styles)
  })
  
})
