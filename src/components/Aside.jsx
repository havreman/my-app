import React from "react";
import {Link} from "react-router-dom";

class Aside extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({ hovered: true});
    }

    handleMouseLeave = () => {
        this.setState({ hovered: false});
    }

    render(){
        const { hovered } = this.state; 

        return( <aside className="visas-idag">
        <ul>
            <li><a href="#">Visas idag</a></li>
            <li><a className="movies" href="film.html">Wicked: 13:00
                <img src="/images/film.png" alt="" /></a></li>
            <li><Link to ="Film" className="movies"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={{transform: hovered ? "scale(1.1)" : "scale(1)"}}>
                Insidan ut 2: 15:00 
                <img  src="/images/Insidan.ut_.2.jpg" alt="" /></Link></li>
            <li><a class="movies" href="film.html">Film 3: 18:00 
                <img src="/images/film5.jpeg" alt="" />
            </a></li>
        </ul>
        </aside>
        );
    }
}

export default Aside;