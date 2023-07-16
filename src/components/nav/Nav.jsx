import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline} from 'react-icons/md'
import {PiBooksLight} from 'react-icons/pi'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsFillDoorOpenFill} from 'react-icons/bs'

import { useState, useEffect} from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  const [portfolioAlertShown, setPortfolioAlertShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionId = `#${section.id}`;
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionOffsetTop - windowHeight * 0.7 &&
          (scrollPosition < sectionOffsetTop + sectionHeight ||
            scrollPosition >= documentHeight - windowHeight - footer.offsetHeight)
        ) {
          setActiveNav(sectionId);
          break;
        }
      }

      // Verificar se o scrollPosition está no footer
      if (
        scrollPosition >= documentHeight - windowHeight - footer.offsetHeight &&
        scrollPosition <= documentHeight - windowHeight
      ) {
        setActiveNav('#footer');
      }

      // Verificar se o scrollPosition está no header
      if (
        scrollPosition < header.offsetHeight - 300
      ) {
        setActiveNav('#');
      }
    };

    if (activeNav === '#portfolio' && !portfolioAlertShown) {
      window.alert('Os itens do portfólio não estão totalmente atualizados, talvez algumas coisas não funcionem.');
      setPortfolioAlertShown(true); 
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeNav, portfolioAlertShown]);

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><PiBooksLight/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
      <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><BsFillDoorOpenFill/></a>
    </nav>
  )
}

export default Nav