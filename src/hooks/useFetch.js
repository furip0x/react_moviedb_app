import React, { useState, useEffect } from 'react'

const api_url = 'https://www.omdbapi.com/?apikey=37b7f7ff'

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState([])

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${api_url}${urlParams}`)
      const data = await response.json()
      // console.log('Fetch-Data:', data)
      // console.log('Data response: ', data.Response) // True or False
      // console.log('Data search: ', data.Search) // Array of items

      if (data.Response !== 'False') {
        setData(data.Search || data)
        setError({ show: false, msg: '' })
      } else {
        setData([])
        setError({ show: true, msg: data.Error })
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError({ show: true, msg: 'error' })
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [urlParams])

  return { loading, error, data }
}

export default useFetch
