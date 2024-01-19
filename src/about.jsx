import React from "react";
import "./about.css";
import about from "./images/about.jpg";


function Aboutus() {
    return (
        <>
            <div className="about-wrapper">
                <div className="abtImage-wrapper">
                    <img src={about} alt="About Image" />
                </div>
                <div className="about-content">
                    <h2>ABOUT US</h2>
                    <h3>Award winning real estate company in Nigeria</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dignissimos aperiam velit at, odit reprehenderit possimus iure error ullam molestias earum vero asperiores, iste vel illo, impedit mollitia? Voluptates quaerat officiis vitae rem sapiente quisquam.</p>
                    <div className="project-stat">
                        <div>
                            <p>PREVIOUS PROJECTS</p>
                            <p>34+</p>
                        </div>
                        <div>
                            <p>YEARS OF EXPERIENCE</p>
                            <p>20+</p>
                        </div>
                        <div>
                            <p>ONGOING PROJECTS</p>
                            <p>15</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Aboutus;