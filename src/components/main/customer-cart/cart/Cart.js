import React from 'react'
import { useArticlesState } from '../../../../context/articles-context'
import { generateID } from '../../../../modules/generator-id/generator-id'
import CartElement from './cart-element/CartElement'

const Cart = () => {

  const { articles } = useArticlesState()
  console.log(articles)

  return (
    <div>
      {articles.map(article => 
        <CartElement 
          name={article[1]}
          key={generateID()}
        />
      )}
    </div>
  )
}

export default Cart
