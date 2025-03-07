import React from "react";

class Header extends React.Component{
    render(){
        return(
        <header>
            <div id="logo">
                <img src= "/images/logo.png" alt="Logo" class="logo"/>
            </div>
            <div class="sökruta">
                <form action="/sökresultat" method="get">
                    <input type="text" name="sök" placeholder="Vad vill du se idag?" required />
                </form>
            </div>
        </header>
        )
    }
}
export default Header;