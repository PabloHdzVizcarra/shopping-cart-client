import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from '../Cart'
import { ArticlesProvider } from '../../../../../context/articles-context'

describe('Test in Cart component', () => {
  const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <ArticlesProvider {...providerProps}>{ui}</ArticlesProvider>,
      renderOptions
    )
  }

  test('should render correctly with all props', () => {
    const data = [
      {
        _id: "9463",
        name: "Pizza",
        price: 215
      }
    ]

    const providerProps = {
      message: {

      },
      articles: [

      ]
    }

    customRender(<Cart
      data={data}
      loading={false}
    />, { providerProps })

    expect(screen.getByTestId(/cart-component/)).toBeInTheDocument()
  })

  test('should render the same number of components as the passed data', async () => {
    const data = [
      {
        _id: "9463",
        name: "Pizza",
        price: 215
      },
      {
        _id: "98663",
        name: "Atun",
        price: 25
      }
    ]

    const providerProps = {
      message: {

      },
      articles: [

      ]
    }

    customRender(<Cart
      data={data}
      loading={false}
    />, { providerProps })
    expect(screen.getAllByTestId(/cartElement-component/i).length).toBe(data.length)
  })
  
})