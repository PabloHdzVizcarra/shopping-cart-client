import React from 'react'
import useFetch from '../../../hooks/use_Fetch/useFetch'
import Cart from './cart/Cart'

const CustomerCart = () => {

  const { response, error, loading } = useFetch()
  return (
    <div>
      <h2 className="text-4xl text-center">Articles</h2>
      <Cart />
    </div>
  )
}

export default CustomerCart
