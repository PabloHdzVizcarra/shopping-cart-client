import React from 'react'
import { articlesReducer } from '../reducers/articles-reducer'

export const ArticlesStateContext = React.createContext()
export const ArticlesDispatchContext = React.createContext()

function ArticlesProvider({ children }) {
  const [state, dispatch] = React.useReducer(articlesReducer, {
    articles: [],
    alertArticles: {
      typeAlert: false,
      message: '',
      thereAlert: false
    }
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

function useArticles() {
  return [useArticlesState(), useArticlesDispatch()]
}

export {
  ArticlesProvider,
  useArticlesState,
  useArticlesDispatch,
  useArticles
}