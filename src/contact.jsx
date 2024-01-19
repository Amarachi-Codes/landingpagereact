import React from "react";
import "./contact.css";
import contact from "./images/contact.jpg";

function Contact(){
    return(
        <>
        <div className="contact-wrapper">
            <div className="img-wrapper">
        <img src={contact} alt="contact" />
        </div>
        <div className="contact-form">
            <h2>Contact Us</h2>
            <p>Discover the difference, where expertise meets excellence in real estate. Let's embark on this exciting journey together.</p>
            <form action="">
            <input type="text" name="fullname" placeholder="FullName" /><br/>
            <input type="email" name="email" placeholder="Email Address" /><br/>
            <input type="number" name="phone" placeholder="Phone Number"/><br/>
            <textarea name="description" placeholder="Description" cols={30} rows={4}></textarea><br/>
            <button>Send Message</button>
            </form>
        </div>
        </div>
        </>
    )
}export default Contact;