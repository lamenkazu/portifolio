import React, { useState } from 'react'

const PortfolioItem = ({image, tecs, title, resume, github, demo}) => {
  
    const [expanded, setExpanded] = useState(false);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }
  
    return (
    <article className="portfolio__item ${expanded}">

        <div className="portfolio__item-image">
            <img src={image} alt="Print from Project"/>
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-tec">
            {
                tecs.map((tec, index) => {
                    return(
                        
                        <div
                            key={index}
                            className={`tec-icon tec-icon-${index} ${hoveredIndex === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}

                        > { tec } </div>
                    )
                })
            }
        </div>
        <p onClick={toggleExpand} className={expanded ? 'expanded' : 'abduce'}>
        {expanded ? resume : 'Ler Resumo . . .'}
        </p>
        <div className="portfolio__item-cta">
            <a href={demo} className="btn" target='_blank'>Live Demo</a>
            <a href={github} className="btn btn-primary" target='_blank'>Github Code</a>
        </div>

    </article>
  )
}

export default PortfolioItem