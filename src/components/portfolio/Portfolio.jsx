import React from 'react'
import './portfolio.css'

import PortfolioItem from './PortfolioItem'
import portfolioData from '../../data/portfolioData'

import {useState} from 'react'

const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const itemsPerRow = 4;
  const numRows = Math.ceil(portfolioData.length / itemsPerRow);

  const getRowClass = (rowIndex, itemIndex) => {
    const startItemIndex = rowIndex * itemsPerRow;
    const endItemIndex = Math.min(startItemIndex + itemsPerRow - 1, portfolioData.length - 1);
    const isExpandedRow = startItemIndex <= expandedIndex && expandedIndex <= endItemIndex;
    const isExpandedItem = expandedIndex === itemIndex;

    if (isExpandedRow && !isExpandedItem) {
      return 'shifted';
    }
    return '';
  };

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
