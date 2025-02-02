import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Heroimg2 from '../component/Heroimg2'
import Pricingcards from '../component/Pricingcards'
import Work from '../component/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Pricingcards/>
      <Footer/>
    </div>
  )
}

export default Project
