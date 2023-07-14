import React from 'react'
import './footer.css'

import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Daedrii</a>

      <ul className='permalinks'>
        <li><a href="#">Start</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Entre Em Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
      </div>


      <div className="footer__copyright">
        <small>
          &copy; Daedrii.
        </small>
      </div>

    </footer>
  )
}

export default Footer