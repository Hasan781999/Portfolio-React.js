import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Heroimg2 from '../component/Heroimg2'
import Aboutcontent from '../component/Aboutcontent'
import Skills from "../component/Skills"

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="Im a Developer"/>
      <Aboutcontent/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default About
