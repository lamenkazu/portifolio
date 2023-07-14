import React from 'react'
import './footer.css'

import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer id='footer'>
      <h4>caso queira pesquisar mais sobre</h4>
      <a href="#" className='footer__logo'>Erick Etiene</a>

      <ul className='permalinks'>
        <li><a href="#">Start</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Entre Em Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a target='_blank' href="https://www.linkedin.com/in/erick-etiene/"><BsLinkedin/></a>
        <a target='_blank' href="https://github.com/lamenkazu"><BsGithub/></a>
        <a target='_blank' href="https://www.instagram.com/daedrii/"><BsInstagram/></a>
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