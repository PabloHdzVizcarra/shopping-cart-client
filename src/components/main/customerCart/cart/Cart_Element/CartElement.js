import React from 'react'
import { useArticlesDispatch } from '../../../../../context/articles-context'
import ButtonDelete from '../../../../atoms/buttons/button_Delete/ButtonDelete'

const CartElement = ({ name, price, id }) => {
  const dispatch = useArticlesDispatch()
  
  
  const handleDelete = async () => {
    console.log(`delete element + ${id}`)

    const response = await fetch(
      'http://127.0.0.1:1820/api/delete-product',
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({id})
      }
    )

    const json = await response.json()
    console.log(json) 

    dispatch({
      type: 'deleteElement',
      payload: json.idItemDeleted
    })
  }

  return (
    <div className="py-2">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden justify-around items-center">
        <a
          href="https://google.com"
          className="w-1/3"
        >
            <h3 className="text-gray-900 font-bold text-1xl text-center">{name}</h3>
          </a>
        <div className="w-2/3 p-2 flex justify-between">
          <h1 className="text-gray-700 font-bold text-xl ml-4">${price}</h1>
          <ButtonDelete 
            handleDelete={handleDelete}
          />
        </div>
      </div> 
    </div>
  )
}

export default CartElement