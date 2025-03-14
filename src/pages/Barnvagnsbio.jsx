import React from "react";
import "../styles/Artiklar.css";
import ArticleImage from "../components/ArticleImage";
import ArticleText from "../components/ArticleText";
import Button from "../components/Button"


class Barnvagnsbio extends React.Component{
    render(){
        return(
            <div className="main-content">
            <main>
            <ArticleImage
            src="/images/barnvagn.png"
            alt = "En bild från filmen Insidan ut 2"
            className= "main-image"/>
                <ArticleText/>
                    <form action="/action_page.php" className="article-info">
                        <label for="email">E-post:</label><br/>
                        <input type="text" id="email" name="email" placeholder="exempel@hotmail.com" />
                        <Button text="Anmäl mig!" /> </form>
            </main>
        </div>);
        }
    }

    export default Barnvagnsbio;