import React from 'react'
import { useArticlesDispatch } from '../../../context/articles-context'
import useFetch from '../../../hooks/use_Fetch/useFetch'
import Cart from './cart/Cart'

const CustomerCart = () => {
  const dispatch = useArticlesDispatch()

  const { response, error, loading } = useFetch(
    'http://127.0.0.1:1820/api/all-products-cart',
    {},
  )

  return (
    <div>
      <h2 className="text-4xl text-center">Articles</h2>
      <Cart 
        data={response}
        loading={loading}
      />
    </div>
  )
}

export default CustomerCart
