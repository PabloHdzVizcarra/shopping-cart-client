import React from 'react'
import { generateID } from '../../../../modules/generator-id/generator-id'
import Spinner from '../../../atoms/spinner/Spinner'
import CartElement from './Cart_Element/CartElement'

const Cart = ({ data, loading }) => {
  
  if (loading) {
    return (
      <Spinner />
    )
  }

  return (
    <div
      className="flex flex-col items-end"
      data-testid="Cart"
    >
      {
        data.map(({ name, price, _id }) => 
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
