import React from 'react'
import MovieListItem from './MovieListItem'
import Loading from '../Loading'
import { useGlobalContext } from '../../context'

const MovieList = () => {
  const { movies, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }

  return (
    <section className='movie-list'>
      {movies.map((item) => {
        return <MovieListItem key={item.imdbID} {...item} />
      })}
    </section>
  )
}

export default MovieList
