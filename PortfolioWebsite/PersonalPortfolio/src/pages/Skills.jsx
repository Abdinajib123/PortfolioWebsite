import React from "react";
import '../Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope}  from "@fortawesome/free-solid-svg-icons"
import { FaHtml5, FaDatabase, FaNetworkWired } from "react-icons/fa";





function Skills(){
    return(
          

        
        <div id="Skills" className="Skills">
                      <h3>My Skills</h3>     
        
        
         <div className="Containerskills">
         <div className="Skill-section1">
            <div className="Fa"> <FaHtml5  size={40} color="white"  /></div>
            <h1> Front-End</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> 
             Alias molestias eius cupiditate expedita laboriosam neque culpa. Magni est id aliquam!</p>
            </div>
        <div className="Skill-section2">
        <div className="Fa"> <FaDatabase  size={40} color="white"  /></div>
            <h1> Back-End</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> 
             Alias molestias eius cupiditate expedita laboriosam neque culpa. Magni est id aliquam!</p> 
        </div>
       
        <div className="Skill-section3">
        <div className="Fa"> <FaNetworkWired  size={40} color="white"  /></div>
            <h1> Networking</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> 
             Alias molestias eius cupiditate expedita laboriosam neque culpa. Magni est id aliquam!</p>   
        </div>
            
        </div>  
                      
       
           
        </div>
    )
}

export  default Skills;
