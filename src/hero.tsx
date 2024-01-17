import React from "react";
import "./hero.css";


function Herosection(){
    return(
        <>
        <div className="hero-wrapper">
            <div className="hero-left">
            <h1>A home built and unqiue with love and dreams</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dignissimos quidem doloremque aspernatur tenetur fuga iste, voluptatibus beatae eius praesentium. Voluptate reprehenderit iusto excepturi natus, pariatur tenetur minima, est, quia eos hic neque harum id.</p>
            <div className="btn-wrapper">
            <button className="hero-btn">Buy Now</button>
            <button className="hero-btn2">Learn More</button>
            </div>
            </div>
            <div className="img-wrapper">
            <img src="./assets/header.png" alt="header image"/>
            </div>
            
        </div>
        </>
    )
}
export default Herosection;