import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Spinner from '../Spinner'

describe('Test in Spinner component', () => {

  test('should render correctly with all props', () => {

    render(<Spinner />)

    expect(screen.getByTestId('Spinner')).toBeInTheDocument()
  })
  
})