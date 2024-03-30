import React from "react";
import '../Style.css'
import myimage from '../assets/11.jpg'
import {  FaFacebook, FaFacebookMessenger, FaTelegram, FaSnapchat, FaInstagramSquare  } from "react-icons/fa";


const NAME= "Abdinajib"
function Banner(){

     return(
      <div className="banner">
          <div className="bannerSec1">
          <h1>Hi Dear,</h1>
          <h2>I am <span className="span"> Abdinajib</span> </h2>
          <h3>I am FullStack Developer</h3>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn">About me</button>
          
          <div className="inst">  
           
          <div className="div3">
        <a href="">  <  FaFacebookMessenger  size={18} color="white"  /></a> 
        </div>
        <div className="div4">
        <a href=""> <  FaFacebook   size={18} color="white"  /></a> 
        </div>
        <div className="div4">
          <a href="">  <  FaSnapchat   size={18} color="white"  /></a>
       
        </div>
        <div className="div6">
          <a href="">   <  FaTelegram   size={18} color="white"  /></a>
      
        </div>
        <div className="div7">
          <a href=""> <   FaInstagramSquare     size={18} color="white"  /></a>
        
        </div>
                      
    </div>
 
     </div>
<div className="bannerSec2">
    <img src={myimage} alt="" />
    </div> 

</div>
     )

}
     


export default Banner;
