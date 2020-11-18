import * as React from 'react'

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    
    const doFetch = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        if (!signal.aborted) {
          setResponse(json)
          return null
        }
        
      } catch (error) {
        if (!signal.aborted) {
          setError(error)
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }

    doFetch()

    return () => {
      abortController.abort()
    }

    //eslint-disable-next-line
  }, [])

  return [response, error, loading]
}

export default useFetch