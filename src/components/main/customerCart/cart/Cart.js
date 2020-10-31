import React from 'react'
import { useArticlesState } from '../../../../context/articles-context'
import { generateID } from '../../../../modules/generator-id/generator-id'
import Spinner from '../../../atoms/spinner/Spinner'
import CartElement from './Cart_Element/CartElement'

const Cart = ({data, loading}) => {

  const { articles } = useArticlesState()
  
  if (loading) {
    return (
      <Spinner />
    )
  }

  return (

    <div>
    
      {
        articles.map(({ name, price, _id }) => 
            <CartElement 
              name={name}
              price={price}
              key={generateID()}
              id={_id}
            />
        )
      }

    </div>
  )
}

export default Cart
