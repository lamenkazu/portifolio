import React from 'react'
import {GiSoapExperiment} from 'react-icons/gi'


const ExperienceDetail = ({ title, content }) => {
  return (
    <article className="experience__details">
        <GiSoapExperiment className='experience__detail-icon'/>
        <div>
          <h4>{title}</h4>
          <small>{content}</small>
        </div>
    </article>
  )
}

export default ExperienceDetail