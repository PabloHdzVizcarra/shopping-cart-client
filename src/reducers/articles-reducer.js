export const articlesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'article': {
      return {
        ...state, 
        articles: [action.payload, ...state.articles]
      }
    }  
    
    case 'alert': {
      return {
        ...state,
        alertArticles: {...action.payload}
      }
    }
      
    case 'setAllData': {
      return {
        ...state,
        articles: [...action.payload]
      }
    }
      
    case 'setArticlesInStore': {
      return {
        ...state,
        listOfArticles: [...action.payload]
      }
    }  
      
    case 'deleteElement': {
      return {
        ...state,
        articles: state.articles
          .filter(article => article._id !== action.payload)
      }
    }
  
    default:
      throw new Error('Invalid Reducer Action')
  }
}
