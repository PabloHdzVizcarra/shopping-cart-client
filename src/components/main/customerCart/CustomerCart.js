import React from 'react'
import { useArticles } from '../../../context/articles-context'
import useFetch from '../../../hooks/use_Fetch/useFetch'
import Cart from './cart/Cart'

const CustomerCart = () => {

  return (
    <div
      className="flex flex-col"
    >
      <h2 className="text-4xl text-right mr-20">Articulos</h2>

    </div>
  )
}

export default CustomerCart
