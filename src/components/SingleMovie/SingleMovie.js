import React from 'react'
import NoPictureImage from '../../no_picture_available.png'
import Loading from '../Loading'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

// https://www.omdbapi.com/?apikey=37b7f7ff&i=${id}

const SingleMovie = () => {
  const { id } = useParams()
  const { loading, error, data } = useFetch(`&i=${id}`)

  if (loading) {
    return <Loading />
  }
  if (error.show) {
    return (
      <section className='error-page'>
        <h1 className='error-page__title'>{error.msg}</h1>
        <Link to='/' className='error-page__link'>
          return to movies
        </Link>
      </section>
    )
  }
  const {
    Poster,
    Title,
    Plot,
    Year,
    Runtime,
    Rated,
    Genre,
    Awards,
    imdbRating,
    imdbVotes,
  } = data
  return (
    <section className='single-movie'>
      <img
        className='single-movie__img'
        src={Poster === 'N/A' ? NoPictureImage : Poster}
        alt={Title}
      />
      <div className='single-movie__info'>
        <h2 className='single-movie__title'>{Title}</h2>
        <p>{Plot}</p>
        <div className='single-movie__tags'>
          <span>Year: {Year}</span>
          <span>Runtime: {Runtime}</span>
          <span>Rated: {Rated}</span>
          <span>Genre{Genre}</span>
          <span>{Awards}</span>
          <span>Rating: {imdbRating}</span>
          <span>Votes: {imdbVotes}</span>
        </div>
        <Link to='/' className='single-movie__link'>
          return to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
