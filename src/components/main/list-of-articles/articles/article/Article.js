import React from 'react'
import PropTypes from 'prop-types'

const Article = ({image, name, description, price,handleClick}) => {
  return (
    <div className="py-6">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 bg-cover" style={{
          backgroundImage: `url(${image})`
        }}>
        </div> 
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
            <button
              className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
              onClick={(event) => handleClick(
                image,
                name,
                description,
                price
              )}
            >Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Article.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Article
