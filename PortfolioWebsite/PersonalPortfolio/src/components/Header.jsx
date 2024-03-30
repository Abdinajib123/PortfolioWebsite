import React from "react";
import '../Style.css'

function Header(){
    return(
        <div className="header">
            <div className="logo">
            <span className="cab">Cab</span> 
             <span className="din">din</span> 
             <span className="ho">ho</span> 
            </div>
            
            <ul>
                <li>
                    <a href="Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export  default Header;
