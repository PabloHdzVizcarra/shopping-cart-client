import React from 'react'
import { useArticlesDispatch } from '../../../context/articles-context'
import useFetch from '../../../hooks/use_Fetch/useFetch'
import Cart from './cart/Cart'

const CustomerCart = () => {

  const dispatch = useArticlesDispatch()

  const { response, error, loading } = useFetch(
    'http://127.0.0.1:1820/api/all-products-cart',
    {},
    dispatch
  )

  return (
    <div
      className="flex flex-col"
    >
      <h2 className="text-4xl text-right mr-20">Articulos</h2>
      <Cart 
        data={response}
        loading={loading}
        error={error}
      />
    </div>
  )
}

export default CustomerCart
