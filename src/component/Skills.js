import "./Skillsstyle.css"

import React from 'react'

const Skills = () => {
  return (
    <div>
    <div className="skills-heading"><h1>SKILLS</h1></div>    
    <div className="skills-container">
        <div className="skill-left">
        <div className="skills">
            <span className="skills-1">HTML
            <i className="val">100%</i>
        </span>
        <div className="progress">
            <div className="progressbar-1"></div>
        </div>
        </div>
        <div className="skills">
        <span className="skills-1">CSS
            <i className="val">95%</i>
        </span>
        <div className="progress">
            <div className="progressbar-2"></div>
        </div>    
        </div>
        <div className="skills">
        <span className="skills-1">JAVASCRIPT
            <i className="val">80%</i>
        </span>
            <div className="progress">
            <div className="progressbar-3"></div>
        </div>
        </div> 
        </div>
        <div className="skill-right">
        <div className="skills">
            <span className="skills-1">JAVA
            <i className="val">80%</i>
        </span>
        <div className="progress">
            <div className="progressbar-4"></div>
        </div>
        </div>
        <div className="skills">
        <span className="skills-1">SQL
        <i className="val">90%</i>
        </span>
        <div className="progress">
            <div className="progressbar-5"></div>
        </div>  
        </div>
        <div className="skills">
        <span className="skills-1">REACT.JS
            <i className="val">75%</i>
        </span>
        <div className="progress">
            <div className="progressbar-6"></div>
        </div>
        </div> 
        </div>
       
      
        
    </div>
    </div>
  )
}

export default Skills
