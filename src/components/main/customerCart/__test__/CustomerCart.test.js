import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomerCart from '../CustomerCart'
import { ArticlesProvider, ArticlesStateContext } from '../../../../context/articles-context'
import * as reducer from '../../../../reducers/articles-reducer'

describe('Test in ButtonDelete component', () => {

  const AllTheProviders = ({ children }) => {
    return (
      <ArticlesProvider>
        <ArticlesStateContext.Provider
          value={{
            articles: [],
            alertArticles: {}
          }}
        >
          {children}
        </ArticlesStateContext.Provider>
      </ArticlesProvider>
    )
  }

  const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

  test('should render correctly with all props and show title', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            _id: "18566",
            name: "Pizaa",
            price: 110
          }
        ])
      })
    )

    customRender(
      <CustomerCart />,
    )

    await screen.findByTestId('Cart')
    expect(screen.getByRole(/heading/)).toBeInTheDocument()
  })

  test('when the component is rendered, it must make an api call with fetch to get the data', async () => {
    const callApi = global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            _id: "18566",
            name: "Pizaa",
            price: 110
          }
        ])
      })
    )

    customRender(
      <CustomerCart />,
    )

    await screen.findByTestId('Cart')
    expect(callApi).toHaveBeenCalled()
    expect(callApi).toHaveBeenCalledWith(
      "api/all-products-cart",
      {}
    )
  })

  test('if the API call is succesfful, you must call the reducer of the context to put the data obtained in the state', async () => {
    const mockArticlesReducer = jest.spyOn(reducer, 'articlesReducer')
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            _id: "18566",
            name: "Pizaa",
            price: 110
          }
        ])
      })
    )

    customRender(
      <CustomerCart />,
    )

    await screen.findByTestId('Cart')
    expect(mockArticlesReducer).toHaveBeenCalled()
  })

  it('while the API call is in progress, you must render the Spinner component', async () => {

    customRender(
      <CustomerCart />
    )

    expect(screen.getByTestId(/Spinner/)).toBeInTheDocument()
    await screen.findByTestId(/Cart/)
  })

  it('The component should render a Cart component', async () => {

    customRender(
      <CustomerCart />
    )

    await screen.findByTestId(/Cart/)
    expect(screen.getByTestId(/Cart/)).toBeInTheDocument()
  })

  it('the component must render the same number of CartElement components as the context of the app', async () => {
    const articles = [
      {
        _id: "5654",
        name: "Pizaa",
        price: 150
      },
      {
        _id: "56848484",
        name: "Milk",
        price: 150
      },
    ]
    const AllTheProviders = ({ children }) => {
      return (
        <ArticlesProvider>
          <ArticlesStateContext.Provider
            value={{
              articles: articles,
              alertArticles: {}
            }}
          >
            {children}
          </ArticlesStateContext.Provider>
        </ArticlesProvider>
      )
    }
  
    const customRender =(ui, options) =>
      render(ui, { wrapper: AllTheProviders, ...options })
    
    customRender(<CustomerCart />)
    const CartElements = await screen.findAllByTestId(/CartElement/)
    expect(CartElements.length).toBe(articles.length)
  })
  
})