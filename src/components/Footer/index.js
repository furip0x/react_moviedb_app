import React from 'react'

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='container'>
        <div className='main-footer__text'>
          movieDB app. Developed by
          <a
            href='https://github.com/furip0x'
            title='furip0x github link'
            target='_blank'
            rel='noreferrer'
          >
            furip0x
          </a>
        </div>
        <div className='main-footer__text'>
          Clapperboard icon made by
          <a
            href='https://www.flaticon.com/'
            title='Flaticon'
            target='_blank'
            rel='noreferrer'
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
