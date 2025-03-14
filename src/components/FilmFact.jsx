import React from "react";

const FilmFacts = ({ length, category, language, year, director, actors }) => {
    return (
      <div className="fact">
        <h4>Faktaruta om filmen</h4>
        <p>Längd: {length}</p>
        <p>Kategori: {category}</p>
        <p>Språk: {language}</p>
        <p>Från: {year}</p>
        <p>Regissör: {director}</p>
        <p>I rollerna: {actors}</p>
      </div>
    );
  };
  
  export default FilmFacts;