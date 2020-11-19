import React, { useEffect } from 'react'
import Article from './article/Article'
import { generateID } from '../../../../modules/generator-id/generator-id'
import { useArticles } from '../../../../context/articles-context'

const Articles = ({ data }) => {
  const [{listOfArticles}, dispatch] = useArticles()
  
  useEffect(() => {
    if (!data) return null
    
    dispatch({
      type: "setArticlesInStore",
      payload: data.data
    })

  }, [dispatch, data])

  const handleClick = async (data) => {

    await fetch("api/add-product-cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(result => result.json())
      .then(resp => {
        console.log(resp)
        dispatch({
          type: "article",
          payload: resp.savedArticle,
        })

        dispatch({
          type: "alert",
          payload: {
            typeAlert: true,
            message: "Articulo agregado al carrito con exito",
            thereAlert: true,
          },
        })

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      
      {listOfArticles.map(({name, image, description, price, category}) => 
        <Article 
          name={name}
          image={image}
          description={'good product'}
          category={category}
          price={price}
          key={generateID()}
          handleClick={handleClick}
        />
      )}

    </div>
  )
}

export default Articles
