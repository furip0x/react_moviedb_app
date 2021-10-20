import React from 'react'
import NoPictureImage from '../../no_picture_available.png'
import { Link } from 'react-router-dom'

const MovieListItem = ({ Poster, Title, Year, imdbID }) => {
  return (
    <article className='movie-item'>
      <Link to={`/movie/${imdbID}`}>
        <img src={Poster === 'N/A' ? NoPictureImage : Poster} alt={Title} />
        <div className='movie-item__info'>
          <h4 className='title'>{Title}</h4>
          <p>{Year}</p>
        </div>
      </Link>
    </article>
  )
}

export default MovieListItem
