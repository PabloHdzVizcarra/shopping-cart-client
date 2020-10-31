import React from 'react'
import PropTypes from 'prop-types'

const CartElement = ({name, price}) => {
  return (
    <div className="py-2">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden justify-center">
        <div className="w-2/3 p-2 flex justify-between">
          <a href="#">
            <h3 className="text-gray-900 font-bold text-1xl">{name}</h3>
          </a>
          <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
        </div>
      </div> 
    </div>
  )
}

CartElement.propTypes = {

}

export default CartElement



