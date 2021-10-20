import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContext } from '../../context'

const Search = () => {
  const { query, setQuery, error } = useGlobalContext()
  const searchValue = useRef('')
  const [searchTerm, setSearchTerm] = useState(query)

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(searchTerm)
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <h2 className='search__title'>Search Movies</h2>
        <input
          type='text'
          className='search__input'
          name='name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={searchValue}
        />
        <button className='search__submit'>Search</button>
        {error.show && <div className='search__error'>{error.msg}</div>}
      </form>
    </div>
  )
}

export default Search
