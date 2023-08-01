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
              <small>11+ projetos</small>
            </article>

            </div>

            <p>
              Formando de duas das principais federais de MG, onde pude desenvolver trabalhos de 
              diferentes vertentes do desenvolvimento como Front, Backend e Mobile em diversas tecnologias.
            </p>
            <p>
              Atuo a aproximadamente 6 meses em um grupo de desenvolvimento sem fins lucrativos voltado à 
              inserção ao mercado de trabalho, visando práticas profissionais durante nossa semana, 6h por dia, 
              com horário flexível. A LetsWorkFree é um projeto onde todos os desenvolvedores compartilham alguns de seus 
              projetos próprios e melhoram eles entre si, organizando nossas tarefas de forma produtiva e organizada, 
              trabalhando principalmente com a metodologia ágil SCRUM, mas as vezes utilizando tabelas KANBAN.
            </p>
            <p>
              Atualmente também trabalho em três projetos individuais sem interação com esse grupo, 
              onde tenho usuários ativos: ThinSecret, um aplicativo de gestão de nutrientes e estado corporal, Agendapp, 
              um aplicativo de gestão de agendamento de clientes, e HabitPlus, um aplicativo para controle de hábitos e metas diárias.
            </p>

            <a href="#contact" className='btn btn-primary'>Mande uma mensagem</a>

          
        </div>
      </div>
    </section>
  )
}

export default About