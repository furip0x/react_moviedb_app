import React from 'react'
import NoPictureImage from '../../no_picture_available.png'
import { Link } from 'react-router-dom'

const MovieListItem = ({ poster, title, year, imdbID }) => {
  return (
    <article className='movie-item'>
      <Link to={`/movie/${imdbID}`}>
        <img src={poster === 'N/A' ? NoPictureImage : poster} alt={title} />
        <div className='movie-item__info'>
          <h4 className='title'>{title}</h4>
          <p>{year}</p>
        </div>
      </Link>
    </article>
  )
}

export default MovieListItem
