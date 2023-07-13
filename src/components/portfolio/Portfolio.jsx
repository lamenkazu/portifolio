import React from 'react'
import './portfolio.css'

import PortfolioItem from './PortfolioItem'
import portfolioData from '../../data/portfolioData'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>você pode checar tudo isso mais detalhadamente no meu</h5>
      <h2>Portfólio :</h2>

      <div className="container portfolio__container">

        {
          portfolioData.map(({id, image, tecs, title, resume, github, demo}) => {
            return(
              <PortfolioItem key={id} image={image} tecs={tecs} title={title} resume={resume} github={github} demo={demo}/>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio