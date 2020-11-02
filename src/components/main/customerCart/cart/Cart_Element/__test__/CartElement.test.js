import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CartElement from '../CartElement'
import { ArticlesProvider } from '../../../../../../context/articles-context'

describe('Test in CartElement component', () => {
  const providerProps = {
    dispatch: jest.fn()
  }

  const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <ArticlesProvider {...providerProps}>{ui}</ArticlesProvider>,
      renderOptions
    )
  }
  
  beforeEach(() => {
    fetch.resetMocks();
  })
  
  test('should render correctly with all props', () => {
    customRender(<CartElement 
      name="Pizza"
      price={215}
      id="38480"
    />, { providerProps })

    expect(screen.getAllByRole('heading').length).toBe(2)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
  
  
})