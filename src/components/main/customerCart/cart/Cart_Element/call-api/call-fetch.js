export const callFetch = async (url, options = {}) => {

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
  } catch (error) {
    return ({
      error: true,
      message: error
    })    
  }  
}