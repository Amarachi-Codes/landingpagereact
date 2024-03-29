import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import "./hero.css";



let mynavs = ["Home", "About", "Project", "Contact"];
let mybtns =["Log In","Register Now"];
function Myheader(){
    return(
        <>
        <nav className="navbar sticky-top container-fluid mynav">
        <a href="" className="logo">BSA HOMES</a>
            <ul className="mylinks">
            {mynavs.map((mynav,index)=>(
                    <li className="mylist" key={index}>{mynav}</li>
                )
                )}
                <span className="space"></span>
                {mybtns.map((mybtn, index)=>(
                    <button className="hero-btn" key={index}>{mybtn}</button>
                )
                )}
                
            </ul>
           
        </nav>
        </>
    )
}
export default Myheader;