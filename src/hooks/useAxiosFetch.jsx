import { useState, useEffect } from 'react'
import axios from 'axios'
const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isloading, setIsLoading] = useState(null)

  useEffect(() => {
    let isMounted = true

    const source = axios.CancelToken.source()
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        })
        if (isMounted) {
          setData(response.data)
          setFetchError(null)
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message)
          setData([])
        }
      } finally {
        isMounted &&
          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
      }
    }
    fetchData(dataUrl)
    const cleanup = () => {
      console.log('clean up function')
      isMounted = false
      source.cancel()
    }
    return cleanup
  }, [dataUrl])
  return { data, fetchError, isloading }
}
export default useAxiosFetch
