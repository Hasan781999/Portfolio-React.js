import "./Workcardstyle.css"
import Workcard from "./Workcard"
import Workcarddata from "./Workcarddata"
import React from 'react'

function Work() {
  return (
    <div className="Work-container">
        <h1 className="project-heading"></h1>
        <div className="project-container">
           {Workcarddata.map((val,data)=>{
            return(
                <Workcard
                key={data}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
           })}  
        </div>
      
    </div>
  )
}

export default Work
