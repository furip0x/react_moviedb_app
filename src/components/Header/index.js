import React from 'react'
import Nav from './Nav'
import Logo from '../../logo.png'

const Header = () => {
  return (
    <header className='main-header'>
      <div className='container'>
        <div className='main-header__logo'>
          <img className='main-header__img' src={Logo} alt='Movie DB logo' />
          <h1 className='main-header__title'>MovieDB</h1>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
