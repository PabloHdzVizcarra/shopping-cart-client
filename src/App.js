import React from 'react'
import Articles from './components/main/articles/Articles'
import List from './components/main/list/List'
import NavBar from './components/navbar/NavBar'

const App = () => {
  return (
    <div>
      <NavBar title='Shopping Cart' />
      <div className='xl:px-32 my-4 grid grid-cols-2'>
        <List />
        <Articles />

      </div>
    </div>
  )
}

export default App

