import React from "react";
import {Link} from "react-router-dom";

class Sidebar extends React.Component{
    render(){
        return( <nav id="sidebar">
                <ul>
            <li><Link to="/">Start</Link></li>
            <li><a href="#">Biljetter</a></li>
            <li><a href ="#" className="submenu">Serier och evenemang</a></li>
            <li><a href="#">Småfolkets bio</a></li>
            <li><a href="#">Nyhetsbrev</a></li>
            <li><a href="#">Övriga tjänster</a></li>
            <li><Link to="/Omoss"> Om oss </Link></li>
        </ul>
        </nav>  
        );
    }
}

export default Sidebar;