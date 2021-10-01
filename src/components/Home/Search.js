import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'

const Search = () => {
  const { setsearchTerm, error } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setsearchTerm(searchValue.current.value)
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <h2 className='search__title'>Search Movies</h2>
        <input
          type='text'
          className='search__input'
          name='name'
          ref={searchValue}
        />
        <button className='search__submit'>Search</button>
        {error.show && <div className='search__error'>{error.msg}</div>}
      </form>
    </div>
  )
}

export default Search
