import React from "react";
import "../styles/Omoss.css";

class Omoss extends React.Component{
    render(){
        return(
        <div className="main-content">
        <main className="om-oss">
            <img src="/images/logo_big.jpg" alt=""/>
            <p>Här hittar ni oss: Adress: Västra Strandgatan 8A, 903 26 Umeå</p>
            <p>Telefon: 072-713 43 40</p>
            <a href="https://www.google.com/maps/place/Folkets+Bio+Umeå/@63.824385,20.257603,17z" target="_blank">
                Folkets Bio Umeå på Google Maps </a>
            </main>
            </div>);
    
    }

    }

    export default Omoss;