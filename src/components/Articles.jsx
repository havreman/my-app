import { Link } from "react-router-dom";

function Articles (){
    return (
        <div className="articles">
                <Link to="/Barnvagnsbio" className="article-link">
                    <article className="barnvagn"> <h2>Barnvagnsbio</h2> </article>
                </Link>
                <a href="#" className="article-link">
                    <article className="nyhetsbrev">
                        <h2>Veckans nyhetsbrev</h2>
                    </article>
                </a>
                <a href= "#" className="article-link">
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
      );
}

export default Articles;