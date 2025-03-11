import React, {useState} from "react";
import "../styles/Film.css";
import "../styles/Artiklar.css";
import "../styles/Main.css";
import {Link} from "react-router-dom";

const Film = () => {
    const [likes, setLikes] = useState(0);
    
        return( 
        <div className="main-content">
        <main className="article-film">
            <img src="../images/Insidan.ut_.2.jpg"/>
            <div className="info-film">
                <div className="fact">
                    <h4>Faktaruta om filmen</h4>
                    <p>Längd: 1h 36min</p>
                    <p>Kategori: Barn/Komedi</p>
                    <p>Språk: Svenska</p>
                    <p>Från: 2024</p>
                    <p>Ressigör: Kelsey Mann</p>
                    <p>I rollerna: Amy Poehler, Kensington Tallman, Phyllis Smith mfl.</p>
                </div>
                <div className="description">
                    <p>Insidan Ut 2 (originaltitel: Inside Out 2) är en animerad film från Disney och Pixar, som är en uppföljare till den älskade succéfilmen Insidan Ut. I den nya filmen återvänder vi till Rileys inre värld, där känslorna Glädje, Vemod, Rädsla, Ilska och Avsky fortsätter att styra hennes liv och hantera tonårens utmaningar.</p>
                    <p>Denna gång introduceras nya känslor som skapar ännu mer kaos och humor i huvudpersonens inre värld. Med fängslande animation, hjärtevärmande berättelse och en blandning av skratt och eftertänksamhet, utforskar filmen frågor om identitet, växande och relationer på ett unikt och fantasifullt sätt.</p>
                <div className = "buttons">
                        <Link to="/Biljetter"><button type="button">Biljetter</button> </Link>
                    <button className = "like-button" onClick={() => setLikes(likes + 1)}>
                    👍 Gilla ({likes})</button>
                </div>
            </div>
            </div>
            <video controls>
                <source src="/images/trailer.mov" className="video" />
            </video>
        </main>
    </div>);
    };

export default Film;
