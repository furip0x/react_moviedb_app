import React, { useEffect, useState } from 'react'
import NoPictureImage from '../../no_picture_available.png'
import Loading from '../Loading'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    setLoading(true)
    const fetchSingleMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=37b7f7ff&i=${id}`
        )
        const data = await response.json()
        // console.log('Data:', data)
        if (data) {
          const newMovie = {
            title: data.Title,
            year: data.Year,
            rated: data.Rated,
            runtime: data.Runtime,
            genre: data.Genre,
            plot: data.Plot,
            awards: data.Awards,
            poster: data.Poster,
            imdbRating: data.imdbRating,
            imdbVotes: data.imdbVotes,
          }
          setMovie(newMovie)
        } else {
          setMovie(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchSingleMovie()
  }, [id])

  if (loading) {
    return <Loading />
  } else {
    return (
      <section className='single-movie'>
        <img
          className='single-movie__img'
          src={movie.poster === 'N/A' ? NoPictureImage : movie.poster}
          alt={movie.title}
        />
        <div className='single-movie__info'>
          <h2 className='single-movie__title'>{movie.title}</h2>
          <p>{movie.plot}</p>
          <div className='single-movie__tags'>
            <span>Year: {movie.year}</span>
            <span>Runtime: {movie.runtime}</span>
            <span>Rated: {movie.rated}</span>
            <span>Genre{movie.genre}</span>
            <span>{movie.awards}</span>
            <span>Rating: {movie.imdbRating}</span>
            <span>Votes: {movie.imdbVotes}</span>
          </div>
          <Link to='/' className='single-movie__link'>
            return to movies
          </Link>
        </div>
      </section>
    )
  }
}

export default SingleMovie
