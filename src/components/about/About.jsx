import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'


import { aboutCardData, aboutTextData } from '../../data/aboutData'

const About = () => {
  return (
    <section id='about'>
      <h5>conheça um pouquinho mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="About me image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            {
              aboutCardData.map((card) => (
                <article key={card.id} className="about__card">
                  {card.icon}
                  <h5>{card.title}</h5>
                  <small>{card.small}</small>
                </article>
              ))
            }

            </div>

            {
              aboutTextData.map(paragraph => (
                <p key={paragraph.id}>
                  {paragraph.text}
                </p>
              ))
            }

            <a href="#contact" className='btn btn-primary'>Mande uma mensagem</a>

          
        </div>
      </div>
    </section>
  )
}

export default About