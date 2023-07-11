import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Ei!</h3>
        <h1>Eu sou Erick Etiene</h1>
        <h5 className="text_light">Desenvolvedor FullStack Mobile</h5>
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