import React from 'react'
import './experience.css'
import ExperienceDetail from './ExperienceDetail'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>ficou curioso sobre</h5>
      <h2>Minhas Experiências?</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Domínio Frontend</h3>

          <div className="experience__content">
            <ExperienceDetail title="Android SDK" content="Experiente"/>
            <ExperienceDetail title="Android Jetpack" content="Experiente"/>
            <ExperienceDetail title="SwiftUI" content="Intermediario"/>
            <ExperienceDetail title="React Native" content="Experiente"/>
            <ExperienceDetail title="EJS" content="Experiente"/>
            <ExperienceDetail title="React" content="Experiente"/>
          </div>

        </div>


        <div className="experience__languages">
          <h3>Linguagens</h3>
          <div className="experience__content">
          <ExperienceDetail title="Swift" content="Intermediario"/>
          <ExperienceDetail title="Kotlin" content="Intermediario"/>
          <ExperienceDetail title="Typescript" content="Experiente"/>
          <ExperienceDetail title="Java" content="Experiente"/>
          <ExperienceDetail title="Javascript" content="Experiente"/>
          <ExperienceDetail title="C/C++" content="Experiente"/>
          <ExperienceDetail title="HTML5" content="Experiente"/>
          <ExperienceDetail title="XML" content="Experiente"/>
          <ExperienceDetail title="CSS" content="Experiente"/>
          <ExperienceDetail title="SCSS" content="Intermediario"/>
          <ExperienceDetail title="SQL" content="Experiente"/>

          </div>
          
        </div>


        <div className="experience__backend">
          <h3>Domínio Backend</h3>
          <div className="experience__content">
            <ExperienceDetail title="AmazonWS" content="Iniciante"/>
            <ExperienceDetail title="NodeJs" content="Experiente"/>
            <ExperienceDetail title="JDBC" content="Intermediário"/>
            <ExperienceDetail title="SQLServer" content="Experiente"/>
            <ExperienceDetail title="noSQL" content="Intermediário"/>
            <ExperienceDetail title="Firebase" content="Experiente"/>
            <ExperienceDetail title="RESTFul API" content="Experiente"/>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Experience