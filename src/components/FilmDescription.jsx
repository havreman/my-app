import React from "react";

const FilmDescription = ({ paragraphs }) => {
    return (
      <div className="description">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    );
  };
  
  export default FilmDescription;