import "./Footerstyle.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter,FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="loaction">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    1-558-998-987
                    </h4>
                </div>
                <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    abc@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Company</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae ad blanditiis placeat ullam deleniti nulla culpa iure et quam</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
