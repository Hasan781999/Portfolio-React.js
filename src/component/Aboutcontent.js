import { Link } from "react-router-dom"
import "./Aboutcontentstyle.css"
import React from 'react'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am i</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore autem illo deleniti velit labore commodi, magni repudiandae dicta neque at iste corporis laudantium facere error nisi delectus quas eum!</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} alt="true" className="img" />
            </div>
            <div className="img-stack bottom">
                <img src={React2} alt="true" className="img" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent
