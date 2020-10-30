import * as module from '../generator-id'

describe('Test in generator-id function', () => {

  test('the function must be work correctly', () => {
    const result = module.generateID()

    expect(result.length).toBe(8)
    
  })

  test('if the length parameter is added to the function, it must be return a string with the same length given as the parameter', () => {
    const result = module.generateID(10)

    expect(result.length).toBe(10)
  })

  test('if an odd number is added, the function will return a string with the length to the next closest even number to the aggregate', () => {
    const result = module.generateID(11)

    expect(result.length).toBe(12)
  })
  
})
