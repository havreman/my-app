import React from "react";
import {Link} from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Articles from "../components/Articles";
import "../styles/Main.css";


class Home extends React.Component{
    render(){
        return( 
        <div className="main-content">
            <div className="film-container">
            < Slideshow/>
            </div>
        <main>
            <Articles/>
        </main>
        </div>
        );
    }
}
export default Home;