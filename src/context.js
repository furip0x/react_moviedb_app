import React, { useState, useContext, createContext, useEffect } from 'react'

const AppContext = createContext()
const url = 'http://www.omdbapi.com/?apikey=37b7f7ff&s='
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setsearchTerm] = useState('rick')
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const movies = data.Search
      // console.log('Fetch-Data:', data)
      if (data.Response !== 'False') {
        const newMovies = movies.map((item) => {
          return {
            title: item.Title,
            year: item.Year,
            award: item.Awards,
            poster: item.Poster,
            metascore: item.Metascore,
            imdbID: item.imdbID,
          }
        })
        setMovies(newMovies)
        setError({ show: false, msg: '' })
      } else {
        setMovies([])
        // setError({ show: true, msg: data.Error })
        setError({ show: true, msg: 'Not found.' })
        console.log('error')
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError({ show: true, msg: error })
    }
  }
  useEffect(() => {
    fetchMovies()
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{ error, loading, movies, searchTerm, setsearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
