import React from "react";

class Aside extends React.Component{
    render(){
        return( <aside class="visas-idag">
        <ul>
            <li><a href="#">Visas idag</a></li>
            <li><a class="movies" href="film.html">Wicked: 13:00
                <img src="/images/film.png" alt="" /></a></li>
            <li><a class="movies" href="film.html">Insidan ut 2: 15:00 
                <img  src="/images/Insidan.ut_.2.jpg" alt="" /></a></li>
            <li><a class="movies" href="film.html">Film 3: 18:00 
                <img src="/images/film5.jpeg" alt="" />
            </a></li>
        </ul>
        </aside>
        );
    }
}

export default Aside;