import React from "react";
import "./footer.css"

function Myfooter() {
    return (
        <>
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="bsa-mission">
                    <h5>BSA HOMES</h5>
                    <p>Our team of seasoned professionals is committed to providing you with exceptional service, in-depth market knowledge, and personalized solutions tailored to your unique needs.</p>
                </div>
                <div className="section-wrapper">
                <div className="section">
                    <h5>Company Info</h5>
                    <p>Home</p>
                    <p>About</p>
                    <p>Project</p>
                    <p>Contact</p>
                </div>
                <div className="section">
                    <h5>Resources</h5>
                    <p>Terms</p>
                    <p>Conditions</p>
                    <p>Policy</p>
                </div>
                <div className="section">
                    <h5>Contact</h5>
                    <p>bsahomes@gmail.com</p>
                    <p>+2347045756160</p>

                </div>
                </div>
                
            </div>
            <p className="copyright">Copyright © 2023 Mars Tchnologies. All rights reserved.</p>
            </div>
        </>
    )
}

export default Myfooter;