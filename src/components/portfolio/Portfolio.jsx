import React from 'react'
import './portfolio.css'

import PortfolioItem from './PortfolioItem'
import portfolioData from '../../data/portfolioData'

import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(getItemsPerRow());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getItemsPerRow() {
    if (window.innerWidth >= 1024) {
      return 4;
    } else if (window.innerWidth >= 600) {
      return 6;
    } else {
      return 1;
    }
  }
  
  const numRows = Math.ceil(portfolioData.length / itemsPerRow);

  return (
    <section id="portfolio">
      <h5>você pode checar tudo isso mais detalhadamente no meu</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">

        {Array.from({ length: numRows }).map((_, rowIndex) => (

          <div className="portfolio__row" key={rowIndex}>
            
            {Array.from({ length: itemsPerRow }).map((_, itemIndex) => {
              const dataIndex = rowIndex + itemIndex * numRows;
              const { id, image, tecs, title, resume, github, demo } = portfolioData[dataIndex];

              return(
                <PortfolioItem key={id} image={image} tecs={tecs} title={title} resume={resume} github={github} demo={demo}/>
              )
              
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
