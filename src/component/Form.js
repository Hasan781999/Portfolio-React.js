import "./Formstyle.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="">Your name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Message</label>
        <textarea rows="6" placeholder="Type Your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
        
    </div>
  )
}

export default Form
