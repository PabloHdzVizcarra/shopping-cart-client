import React from 'react'
import Article from './article/Article'
import { generateID } from '../../../../modules/generator-id/generator-id'
import { useArticlesDispatch } from '../../../../context/articles-context'
import { createArticle } from './func-create-article/create-article'
import AlertSuccess from '../../../atoms/alert-success/AlertSuccess'

const Articles = props => {

  const dispatch = useArticlesDispatch()
  
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

  const handleClick = async (data) => {
    console.log('saving data');

    dispatch({
      type: 'article',
      payload: data
    })

    await fetch('http://127.0.0.1:1820/api/add-product-cart', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(result => result.json())
      .then(data => {
        console.log(data.result)
        dispatch({
          type: 'alert',
          payload: {
            typeAlert: true,
            message: "Articulo agregado al carrito con existo",
            thereAlert: true,
          }
        })
      })
      .catch(console.log)
  }

  return (
    <div>
      
      {articlesList.map(({name, image, description, price}) => 
        <Article 
          name={name}
          image={image}
          description={description}
          price={price}
          key={generateID()}
          handleClick={handleClick}
        />
      )}

    </div>
  )
}

export default Articles
