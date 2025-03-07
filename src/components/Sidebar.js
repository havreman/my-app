import React from "react";

class Sidebar extends React.Component{
    render(){
        return( <nav id="sidebar">
                <ul>
            <li><a href="index.html">Start</a></li>
            <li><a href="#">Biljetter</a></li>
            <li><a href ="#" class="submenu">Serier och evenemang</a>
            <ul class="submenu-content">
                <li><a href="#">Serie 1</a></li>
                <li><a href="#">Serie 2</a></li>
                <li><a href="#">Serie 3</a></li>
            </ul></li>
            <li><a href="#">Småfolkets bio</a></li>
            <li><a href="#">Nyhetsbrev</a></li>
            <li><a href="#">Övriga tjänster</a></li>
            <li><a href="omoss.html">Om oss</a></li>
        </ul>
        </nav>  
        );
    }
}

export default Sidebar;