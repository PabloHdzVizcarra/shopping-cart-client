import React from 'react'
import PropTypes from 'prop-types'
import Article from './article/Article'

const Articles = props => {

  const articlesList = [
    {
      image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1260968.jpg&fm=jpg',
      name: 'Pizza',
      description: 'Una deliciosa pizza de pepperoni',
      price: 180 ,
    },
    {
      image: 'https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-853004.jpg&fm=jpg',
      name: 'Muffins',
      description: 'Deliciosos muffins de saber fresa',
      price: 40,
    },
    {
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg',
      name: 'Hamburguer',
      description: 'Exquisita hamburguesa ',
      price: 90,
    },
  ]

  return (
    <div>
      
      {articlesList.map(({name, image, description, price}) => 
        <Article 
          name={name}
          image={image}
          description={description}
          price={price}
        />
      )}
      
    </div>
  )
}

Articles.propTypes = {

}

export default Articles
