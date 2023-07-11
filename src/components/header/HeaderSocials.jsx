import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href="https://linkedin.com/in/erick-etiene" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/lamenkazu" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials