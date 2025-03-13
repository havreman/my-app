import React from "react";
import "../styles/Artiklar.css";
import ArticleImage from "../components/ArticleImage";


class Barnvagnsbio extends React.Component{
    render(){
        return(
            <div className="main-content">
            <main>
            <ArticleImage
            src="/images/barnvagn.png"
            alt = "En bild från filmen Insidan ut 2"
            className= "main-image"/>
                <div className="article-info">
                    <h1>Välkommen på barnvagnsbio</h1>
                    <h3>Bli en del av bio-gemenskapen</h3>
                    <p>Vi visar kvalitetsfilm för spädbarnsföräldrar som längtar efter att få gå på bio! Bebisar under 1 år får följa med in i salongen där nya filmer visas med dämpat ljud i svag belysning. Skötbädd finns tillgänglig. Visningarna äger rum på torsdagar 10:00, biljettpris är 105 kr. Anmäl dig genom att fylla i din e-post nedan.</p>
                    <form action="/action_page.php">
                        <label for="email">E-post:</label><br/>
                        <input type="text" id="email" name="email" placeholder="exempel@hotmail.com" />
                        <button type="submit">Anmäl mig!</button></form>
                </div>
            </main>
        </div>);
        }
    }

    export default Barnvagnsbio;