import React from "react";
import "./project.css";
import project1 from "./images/project-1.jpg";
import project2 from "./images/project-2.jpg";
import project3 from "./images/project-3.jpg";
import project4 from "./images/project-4.jpg";
import project5 from "./images/project-5.jpg";
import project6 from "./images/project-6.jpg";

function Button() {
    return (
        <>
            <button>Book Now</button>
        </>
    )
}

function Propertylocation() {
    return (
        <>
            <h2>Palm View Apartments</h2>
            <p> Palm Jumeirah, Dubai</p>
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
                    <div>
                        <Propertylocation />
                        <Button />
                    </div>
                </div>
                <div>
                    <img src={project2} alt="project2" />
                    <div>
                        <Propertylocation />
                        <Button />
                    </div>
                </div>
                <div>
                    <img src={project3} alt="project3" />
                    <div>
                        <Propertylocation />
                        <Button />
                    </div>
                </div>
                <div>
                <img src={project4} alt="project4" />
                <div>
                        <Propertylocation />
                        <Button />
                    </div>
                </div>
                <div>
                <img src={project5} alt="project5" />
                <div>
                        <Propertylocation />
                        <Button />
                    </div>
                </div>
                <div>
                <img src={project6} alt="project6" />
                <div>
                        <Propertylocation />
                        <Button />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Myproject;