import React from 'react'
import useFetch from '../../../hooks/use_Fetch/useFetch'
import Spinner from '../../atoms/spinner/Spinner'
import Articles from './articles/Articles'

const ListOfArticles = () => {
  const [response, error, loading] = useFetch('/api/v1/all-articles')
  if (error) console.log(error)

  return (
    <div>
      <h1 className='text-2xl'>Lista de articulos</h1>
      <div>
        {loading
          ? <Spinner />
          : <Articles
              data={response}
            />
        }
      </div>
    </div>
  )
}

export default ListOfArticles
