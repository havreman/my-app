import { Link } from "react-router-dom";

// En återanvändbar komponent för varje artikel
const ArticleItem = ({ title, link, className }) => {
    return (
      <Link to={link} className="article-link">
        <article className={className}>
          <h2>{title}</h2>
        </article>
      </Link>
    );
  };

  const Articles = () => {
    return (
        <div className="articles">
            <ArticleItem title="Barnvagnsbio" link="/Barnvagnsbio" className="barnvagn" />
            <ArticleItem title="Veckans nyhetsbrev" link="#" className="nyhetsbrev" />
            <ArticleItem title="Bio Vino" link="#" className="bio-vino" />
            <ArticleItem title="Skolbio" link="#" className="skolbio" />
        </div>
      );
}

export default Articles;