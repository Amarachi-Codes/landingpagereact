import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

let mynavs = ["Home", "About", "Project", "Contact"];
let mybtns =["Log In","Register Now"]
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
                {mybtns.map((mybtn, index)=>(
                    <button className="mybtn" key={index}>{mybtn}</button>
                )
                )}
            </ul>
           
        </nav>
        </>
    )
}
export default Myheader;