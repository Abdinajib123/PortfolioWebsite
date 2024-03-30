import React from "react";
import '../Style.css'
import myimage from '../assets/11.jpg'
import { FaInstagramSquare, FaFacebook, FaFacebookMessenger, FaTelegram, FaSnapchat } from "react-icons/fa";

function Bio(){
    return(
        <div id="About" className="About">
        
          <div className="Aboutsec1">
    <img src={myimage} alt="" />
          </div>
          <div className="Aboutsec2">
          <h1> About me </h1>
          <p>
                 if i talk my background my name  is Abdinajib abdulahi i was born and barbare in mugdisho i lernt school at Tabarak school i finished school in 2021 at Tabarak school after i finished i join to jamhuriya university just i am student at study jamhuriya. also i finished 
                 fullStack at Somali technology association center(SOMTAC) in 2023  i intrest to be fullStack Developer i wish to be if allah say.
               </p>   
               <button className="btn"> About me</button>
              
    
                          
        </div>
        </div>

    )
}

export  default Bio;
