import React from "react";
import "./project.css";
import "./hero.css";
import project1 from "./images/project-1.jpg";
import project2 from "./images/project-2.jpg";
import project3 from "./images/project-3.jpg";
import project4 from "./images/project-4.jpg";
import project5 from "./images/project-5.jpg";
import project6 from "./images/project-6.jpg";

function Button() {
    return (
        <>
            <button className="hero-btn">Book Now</button>
        </>
    )
}

function Propertylocation(props) {
    return (
        <>
            <div className="property-wrapper">
                <h2>{props.name}</h2>
                <p> {props.location}</p>
                <Button />
            </div>
        </>
    )


}


function Myproject() {
    return (
        <>
            <div className="projects-wrapper">
                <h1>Ongoing Projects</h1>
                <p>We are dedicated to helping you find your dream property with ease and confidence.</p>
            </div>
            <div className="img-container">
                <div>
                    <img src={project1} alt="project1" />
                    <Propertylocation name="Marina Heights" location="Marina, Lagos" />
                    


                </div>
                <div>
                    <img src={project2} alt="project2" />

                    <Propertylocation name="Transcorp Residency" location="Aguiyi Ironsi, Maitama Abuja" />


                </div>
                <div>
                    <img src={project3} alt="project3" />

                    <Propertylocation name="Pennisula Residency" location="Off Chevron way, Lekki Pennisula Lagos" />


                </div>
                <div>
                    <img src={project4} alt="project4" />
                    <Propertylocation name="Admiralty Suites" location="Admiralty way, Lekki Lagos" />
                    


                </div>
                <div>
                    <img src={project5} alt="project5" />
                    <Propertylocation name="Desert Rose Flats" location="Badore Ajah, Lagos" />
                    


                </div>
                <div>
                    <img src={project6} alt="project6" />
                    <Propertylocation name="Palm View Apartments" location="Off Oando, Lekki Phase 1 Lagos" />
                    


                </div>
            </div>

        </>
    )
}
export default Myproject;