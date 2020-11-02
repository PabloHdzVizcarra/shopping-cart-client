import {articlesReducer} from "../articles-reducer"

describe('Test in articlesReducer', () => {

  it('should function correctly action /article/', () => {
    const state = {
      articles: []
    }
    const actionArticle = {
      type: 'article',
      payload: {
        name: 'test',
        price: 25
      }
    }

    expect(articlesReducer(state, actionArticle)).toEqual(
      {
        articles: [{name: "test", price: 25}]
      }
    )
    
  })
  
  
})
