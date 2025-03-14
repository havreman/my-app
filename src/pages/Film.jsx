import React, {useState} from "react";
import "../styles/Film.css";
import "../styles/Artiklar.css";
import "../styles/Main.css";
import LikeButton from "../components/LikeButton";
import ArticleImage from "../components/ArticleImage";
import FilmFacts from "../components/FilmFact";
import FilmDescription from "../components/FilmDescription";
import Button from "../components/Button";
import Trailers from "../components/Trailers";

const Film = () => {
    
    return( 
    <div className="main-content">
        <main className="article-film">
        <ArticleImage
            src="/../images/Insidan.ut_.2.jpg"
            alt = "En bild från filmen Insidan ut 2"
            className= "main-image"/>
            <div className="info-film">
                    <FilmFacts          
                        length="1h 36min"
                        category="Barn/Komedi"
                        language="Svenska"
                        year="2024"
                        director="Kelsey Mann"
                        actors="Amy Poehler, Kensington Tallman, Phyllis Smith m.fl."/>
                <div className="description">
                    <FilmDescription
                    paragraphs={["Insidan Ut 2 (originaltitel: Inside Out 2) är en animerad film från Disney och Pixar, som är en uppföljare till den älskade succéfilmen Insidan Ut. I den nya filmen återvänder vi till Rileys inre värld, där känslorna Glädje, Vemod, Rädsla, Ilska och Avsky fortsätter att styra hennes liv och hantera tonårens utmaningar. ",
                        "Denna gång introduceras nya känslor som skapar ännu mer kaos och humor i huvudpersonens inre värld. Med fängslande animation, hjärtevärmande berättelse och en blandning av skratt och eftertänksamhet, utforskar filmen frågor om identitet, växande och relationer på ett unikt och fantasifullt sätt."
                    ]}/>
                <div className = "buttons">
                        <Button text="Biljetter" link="/Biljetter"/>
                    <LikeButton/>
                </div>
                </div>
            </div>
            <Trailers
                src="/images/trailer.mov"/>
        </main>
    </div>);
    };

export default Film;
