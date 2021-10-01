import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link to='/' className='main-nav__link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='main-nav__link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
