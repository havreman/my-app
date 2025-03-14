import React from "react";

function Trailers({ src }){
    return(
    <div className="video"> 
        <video controls> 
            <source src={src} type="video/mp4" />
        </video>
    </div>
    );
}

export default Trailers;