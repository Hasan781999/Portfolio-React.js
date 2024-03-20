import "./Heroimgstyle.css";
import React from "react";
import Introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <p>HI, I'M HASAN</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
