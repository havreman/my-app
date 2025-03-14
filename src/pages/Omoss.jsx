import React from "react";
import "../styles/Omoss.css";
import ArticleImage from "../components/ArticleImage";
import Contact from "../components/Contact";

class Omoss extends React.Component{
    render(){
        return(
        <div className="main-content">
        <main className="om-oss">
            <ArticleImage
            src="/images/logo_big.jpg"
            alt = "En bild på loggan"
            className= "main-image"/>
            <Contact/>
            </main>
            </div>);
    
    }

    }

    export default Omoss;