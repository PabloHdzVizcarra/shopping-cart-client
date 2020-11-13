import React from 'react'
import { render, screen } from '@testing-library/react'
import SubmitButton from '../SubmitButton'

describe('Test in SubmiButton component', () => {
  const styles = 'center padding-4'
  const name = 'Send Data'

  test('should render correctly with all props', () => {
    render(<SubmitButton 
      styles={styles}
      name={name}
    />)
    expect(screen.getByTestId(/submit_button/)).toBeInTheDocument()
    expect(screen.getByTestId(/submit_button/).type).toBe('submit')
  })
  
  test('the button text must be equal to the prop name passed as accessory', () => {
    render(<SubmitButton 
      styles={styles}
      name={name}
    />)
    expect(screen.getByTestId(/submit_button/).textContent).toBe(name)
  })

  test('the button classes must be equal to the prop styles passed as accessory', () => {
    render(<SubmitButton 
      styles={styles}
      name={name}
    />)
    expect(screen.getByTestId(/submit_button/).className).toBe(styles)
  })
  
  
})
