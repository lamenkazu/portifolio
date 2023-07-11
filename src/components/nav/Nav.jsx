import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline} from 'react-icons/md'
import {PiBooksLight} from 'react-icons/pi'
import {AiOutlineMessage} from 'react-icons/ai'
import {GiCrownedExplosion} from 'react-icons/gi'

import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiCrownedExplosion/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><PiBooksLight/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav