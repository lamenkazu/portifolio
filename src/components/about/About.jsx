import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {PiProjectorScreenThin} from 'react-icons/pi'
import {MdOutlineLanguage} from 'react-icons/md'


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

            <article className="about__card">
              <AiOutlineFieldTime className='about__icon'/>
              <h5>Acadêmico</h5>
              <small>1300h em SI e TI</small>
            </article>

            <article className="about__card">
              <MdOutlineLanguage className='about__icon'/>
              <h5>Inglês</h5>
              <small>Nível B2</small>
            </article>

            <article className="about__card">
              <PiProjectorScreenThin className='about__icon'/>
              <h5>Projetos</h5>
              <small>+ projetos</small>
            </article>

            </div>

            <p>
              Sou um profissional versátil e apaixonado por tecnologia, com habilidades em gerenciamento de projetos, análise de dados e
              desenvolvimento de software. Tenho expertise em tecnologias front e backend, com especialização em
              desenvolvimento Mobile. Possuo formação acadêmica complementar em Sistemas de Informação e experiência em projetos próprios
              de alta arquitetura, atualmente atuo como desenvolvedor fullstack web e mobile na LetsWorkFree, grupo sem fins lucrativos, com
              objetivo de adentrar ao mercado de trabalho aplicando metodologias ágeis SCRUM
            </p>

            <a href="#contact" className='btn btn-primary'>Mande uma mensagem</a>

          
        </div>
      </div>
    </section>
  )
}

export default About