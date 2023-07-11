import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Ei! Eu sou</h5>
        <h1>Erick Etiene</h1>
        <h5 className="text_light">Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
            <img src={ME} alt="Eu" />
        </div>

        <a href="#contact" className='scroll__down'>Descer</a>
      </div>
    </header>
  )
}

export default Header