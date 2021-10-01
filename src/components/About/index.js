import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <h1>A React movie DB app.</h1>
      <h2>Built with</h2>
      <ul>
        <li>- CSS</li>
        <li>- HTML</li>
        <li>- JAVASCRIPT</li>
        <li>- ReactJS (useState, useContext, useRef, react-router)</li>
        <li>
          -{' '}
          <a href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>
            The Open Movie Database
          </a>
        </li>
      </ul>
    </section>
  )
}

export default About
