import React from 'react'

const CartElement = ({name, price}) => {
  return (
    <div className="py-2">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden justify-center">
        <div className="w-2/3 p-2 flex justify-between">
          <a href="https://google.com">
            <h3 className="text-gray-900 font-bold text-1xl">{name}</h3>
          </a>
          <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
        </div>
      </div> 
    </div>
  )
}

export default CartElement



