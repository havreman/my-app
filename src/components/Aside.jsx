import React, { useState } from "react";
import { Link } from "react-router-dom";

// Enskild komponent för varje film
const MovieItem = ({ title, time, img, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li>
      <Link
        to={link}
        className="movies"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {title}: {time}
        <img src={img} alt={title} />
      </Link>
    </li>
  );
};

const Aside = () => {
  return (
    <aside className="visas-idag">
      <ul>
        <li>
          <a href="#">Visas idag</a>
        </li>
        <MovieItem title="Wicked" time="13:00" img="/images/film.png" link="film.html" />
        <MovieItem title="Insidan ut 2" time="15:00" img="/images/Insidan.ut_.2.jpg" link="/Film" />
        <MovieItem title="Film 3" time="18:00" img="/images/film5.jpeg" link="film.html" />
      </ul>
    </aside>
  );
};

export default Aside;
