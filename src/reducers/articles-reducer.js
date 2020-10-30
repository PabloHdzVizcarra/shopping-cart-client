export const articlesReducer = (state, action) =>  {
  switch (action.type) {
    case 'article': {
      return {
        ...state, 
        data: action.payload
      }
    }      
  
    default:
      break
  }
}