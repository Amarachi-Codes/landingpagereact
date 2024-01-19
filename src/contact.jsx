import React from "react";
import "./contact.css";
import contact from "./images/contact.jpg";
import "./hero.css";

function Contact(){
    return(
        <>
        <div className="contact-wrapper">
            <div className="contact-img">
        <img src={contact} alt="contact" />
        </div>
        <div className="contact-form">
            <h1>Contact Us</h1>
            <p>Discover the difference, where expertise meets excellence in real estate. Let's embark on this exciting journey together.</p>
            <form action="" className="form">
            <input type="text" name="fullname" placeholder="FullName" /><br/>
            <input type="email" name="email" placeholder="Email Address" /><br/>
            <input type="number" name="phone" placeholder="Phone Number"/><br/>
            <textarea name="description" placeholder="Description" cols={30} rows={4}></textarea><br/>
            <button className="hero-btn">Send Message</button>
            </form>
        </div>
        </div>
        </>
    )
}export default Contact;