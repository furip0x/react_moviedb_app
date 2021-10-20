import React, { useState, useContext, createContext } from 'react'
import useFetch from './hooks/useFetch'

// https://www.omdbapi.com/?apikey=37b7f7ff&s=

const AppContext = createContext()
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('morty')
  const { loading, error, data } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ loading, error, data, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
