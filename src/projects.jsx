import React from "react";
let images= ["project-1.jpg","project-2.jpg","project-3.jpg","project-4.jpg","project-5.jpg","project-6.jpg"]
function Myproject(){
    return(
        <>
        <h3>Ongoing Projects</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur iusto nobis harum quas illum fuga quasi ipsam, ad ea excepturi accusantium enim suscipit modi eos tempore est incidunt eligendi?</p>
        <div className="img-container">
           {images.map((image,index)=>(
            <img key={index} src={image} alt="projects"/>
           ))}
        </div>
        
        </>
    )
}
export default Myproject;