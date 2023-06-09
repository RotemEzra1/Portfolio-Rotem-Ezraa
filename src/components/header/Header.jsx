import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import LOGO from '../../assets/logo3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rotem Ezra</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <h5 className="text-light">Bachelor's Degree in Software Engineering</h5>
        {/* <img src={LOGO} className='header__logo' /> */}
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='Rotem'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header