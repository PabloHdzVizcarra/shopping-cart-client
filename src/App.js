import React from 'react'
import Alert from './components/atoms/alert/Alert'
import CustomerCart from './components/main/customerCart/CustomerCart'
import ListOfArticles from './components/main/list-of-articles/ListOfArticles'
import NavBar from './components/navbar/NavBar'
import { ArticlesProvider } from './context/articles-context'

const App = () => {
  return (
    <div className='min-h-screen'>
      <NavBar title='Shopping Cart' />
      <div className='xl:px-32 my-4 grid grid-cols-2 gap-2'>
        
        <ArticlesProvider>
          <ListOfArticles />
          <CustomerCart />
          <Alert />
        </ArticlesProvider>

      </div>
    </div>
  )
}

export default App

