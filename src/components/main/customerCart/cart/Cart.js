import React from 'react'
import { useArticlesState } from '../../../../context/articles-context'
import { generateID } from '../../../../modules/generator-id/generator-id'
import Spinner from '../../../atoms/spinner/Spinner'
import CartElement from './Cart_Element/CartElement'
const Cart = ({data, loading}) => {

  const { articles } = useArticlesState()

  console.log(data, loading);

  if (loading) {
    return (
      <Spinner />
    )
  }

  return (

    <div>
    
      {articles.map(({name, price}) => 
        <CartElement 
          name={name}
          price={price}
          key={generateID()}
        />
      )}
    </div>
  )
}

export default Cart
