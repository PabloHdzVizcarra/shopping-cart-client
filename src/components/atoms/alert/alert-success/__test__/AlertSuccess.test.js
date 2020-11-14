import React from 'react'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import AlertSuccess from '../AlertSuccess'

describe('Test in component AlertSucces', () => {
  const message = 'Linux the best SO'

  const renderComponent = () => {
    const secondsHide = 1000

    return render(<AlertSuccess
      message={message}
      secondsHide={secondsHide}
    />)
  }

  test('should show correctly with all props', () => {
    renderComponent()
    expect(screen.getByRole(/alert/)).toBeInTheDocument()
  })

  test('the value of the message accessory, muts be equal to the message shown in the alert', () => {
    renderComponent()
    expect(screen.getByText(/Linux/).textContent).toBe(message)
  })
  
  test('the component should disappear after passing the milliseconds provided in the secondsHide accessory', async() => {
    renderComponent()
    expect(screen.getByText(/Linux/).textContent).toBe(message)

    await waitForElementToBeRemoved(screen.getByRole(/alert/)).then(() => {
      expect(screen.queryByRole(/alert/)).not.toBeInTheDocument()
    })
  })
  
  
})
