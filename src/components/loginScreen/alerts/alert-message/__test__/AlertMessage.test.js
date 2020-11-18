import React from 'react'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import AlertMessage from '../AlertMessage'

describe('Test in AlertMessage component', () => {

  test('you must render a div with the role alert', () => {
    render(<AlertMessage 
      message='Some Alert Message'
      type="Success"
    />)
    expect(screen.getByRole(/alert/)).toBeInTheDocument()    
  })

  test('the type and message accesories must be displayed in the component as texts', () => {
    render(<AlertMessage 
      message='Some Alert Message'
      type="Success"
    />)

    expect(screen.getByText(/Some Alert Message/i).textContent)
        .toBe('Some Alert Message')
    expect(screen.getByText(/Success/i).textContent).toBe(`Success `)
  })
  
  test('alert should hide within 3 seconds automatically', async () => {
    render(<AlertMessage 
      message='Some Alert Message'
      type="Success"
    />)

    await waitForElementToBeRemoved(() => screen.queryByRole(/alert/), {
      timeout: 3500
    })

    expect(screen.queryByRole(/alert/)).not.toBeInTheDocument()
  })
  
  test('the component muts be dismounted by passing the milliseconds that are added to the coponent as an accesory in the secondsToHide prop', async () => {
    render(<AlertMessage 
      message='Some Alert Message'
      type="Success"
      secondsToHide={500}
    />)

    await waitForElementToBeRemoved(() => screen.queryByRole(/alert/))
    expect(screen.queryByRole(/alert/)).not.toBeInTheDocument()
  })
  
  
})
