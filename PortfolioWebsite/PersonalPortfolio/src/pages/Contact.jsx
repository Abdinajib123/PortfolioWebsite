import React from "react";
import '../Style.css';

function Contact (){
    return(
        <div id="Contact" className="Contact">
            <form >
            <h1>Contact</h1>
            <input type="text" id="firstname" placeholder="First Name" required />
            <input type="text" id="lastname" placeholder="Last Name" required />
            <input type="email" id="email" placeholder="Email" required />
            <input type="text" id="mobile" placeholder="Mobile" required />
            <h4>Type your message here....</h4>
            <textarea></textarea>
            <input type="Submit" value= "Send" id="button" />

            </form>
           
        </div>
    )
}

export default Contact;