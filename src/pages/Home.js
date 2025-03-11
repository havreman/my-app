import React from "react";
import {Link} from "react-router-dom";
import Slideshow from "../components/Slideshow";
import "../styles/Main.css";


class Home extends React.Component{
    render(){
        return( 
        <div className="main-content">
            <div className="film-container">
            < Slideshow/>
            </div>
        <main>
            <div className="articles">
                <Link to="/Barnvagnsbio" className="article-link">
                    <article className="barnvagn"> <h2>Barnvagnsbio</h2> </article>
                </Link>
                <a href="#" className="article-link">
                    <article className="nyhetsbrev">
                        <h2>Veckans nyhetsbrev</h2>
                    </article>
                </a>
                <a href= "#" className="article-link">
                    <article className="bio-vino">
                        <h2>Bio Vino</h2>
                    </article>
                </a>
                <a href= "#" className="article-link">
                    <article className="skolbio">
                        <h2>Skolbio</h2>
                    </article>
                </a>
            </div>
        </main>
        </div>
        );
    }
}
export default Home;