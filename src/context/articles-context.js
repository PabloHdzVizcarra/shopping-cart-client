import * as React from 'react'
import { articlesReducer } from '../reducers/articles-reducer'

const ArticlesStateContext = React.createContext()
const ArticlesDispatchContext = React.createContext()



function ArticlesProvider({ children }) {
  const [state, dispatch] = React.useReducer(articlesReducer, {
    articles: [],
  })

  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  )
}

function useArticlesState() {
  const context = React.useContext(ArticlesStateContext)
  if (context === undefined) {
    throw new Error('useArticlesContext must be used within a ArticlesProvider')
  }

  return context
}

function useArticlesDispatch() {
  const context = React.useContext(ArticlesDispatchContext)
  if (context === undefined) {
    throw new Error('useArticlesDispatch must be used within a ArticlesProvider')
  }

  return context
}

export {
  ArticlesProvider,
  useArticlesState,
  useArticlesDispatch,
}