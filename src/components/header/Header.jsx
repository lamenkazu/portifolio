import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import {BsArrowDownCircle} from 'react-icons/bs'

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

        <a href="#footer" className='scroll__down'><BsArrowDownCircle/></a>
      </div>
    </header>
  )
}

export default Header