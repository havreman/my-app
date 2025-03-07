import React from "react";
import Slideshow from "../components/Slideshow";

class Home extends React.Component{
    render(){
        return( 
        <div class="main-content">
            <div class="film-container">
            < Slideshow/>
            </div>
        <main>
            <div class="articles">
                <a href="barnvagnsbio.html" class="article-link">
                    <article class="barnvagn"> <h2>Barnvagnsbio</h2> </article>
                </a>
                <a href="#" class="article-link">
                    <article class="nyhetsbrev">
                        <h2>Veckans nyhetsbrev</h2>
                    </article>
                </a>
                <a href= "#" class="article-link">
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