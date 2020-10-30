export const articlesReducer = (state, action) => {
  console.log(state, action);
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
  
    default:
      break
  }
}