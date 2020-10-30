import React from 'react'
import { useArticlesState } from '../../../../context/articles-context'
import { generateID } from '../../../../modules/generator-id/generator-id'
import CartElement from './cart-element/CartElement'

const Cart = () => {

  const { articles } = useArticlesState()

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
