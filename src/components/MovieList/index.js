import React from 'react'
import MovieListItem from './MovieListItem'
import Loading from '../Loading'
import { useGlobalContext } from '../../context'

const MovieList = () => {
  const { data, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }

  return (
    <section className='movie-list'>
      {data.map((item) => {
        // console.log('movieList item: ', item)
        return <MovieListItem key={item.imdbID} {...item} />
      })}
    </section>
  )
}

export default MovieList
