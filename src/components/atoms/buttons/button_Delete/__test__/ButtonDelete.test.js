import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonDelete from '../ButtonDelete'
import '@testing-library/jest-dom'

describe('Test in ButtonDelete component', () => {

  test('should render correctly with all props', () => {

    const handleDelete = jest.fn()
    const text = 'Delete'

    render(<ButtonDelete 
      handleDelete={handleDelete}
      text={text}
    />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  
})
