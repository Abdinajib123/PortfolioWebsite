import React from "react";
import '../Style.css'
import myimage from '../assets/13.jpeg'
import my from '../assets/8.avif'
import image from '../assets/6.png'




function Projects(){
    return(
        <div id="Projects" className="Projects"> 
           
             <h1 >
                Projects
             </h1>
            <div className="ContainerProject" >
              <div className="Projec1">
                <img src={myimage} alt="" />
              <h5>Registration System</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
              <h5>View</h5>
              </div>
              <div className="Project2">
                <img src={my} alt="" />
                <h5>Login System</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
              <h5>View</h5>
              </div>
              <div className="Project3">
                <img src={image} alt="" />
                <h5>Portfolio project</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
              <h5>View</h5>
              </div>
            </div>

        </div>
    )

}

export default Projects;