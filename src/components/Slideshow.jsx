import React, {useEffect, useState, useRef} from "react";
import {Link} from "react-router-dom";

function Slideshow () {

  const [slideIndex, setSlideIndex] = useState(0); //Sätter startindex för bildspelet
  const slides = [
      { src: "/images/film.png" },
      { src: "/images/Insidan.Ut_.2.jpg"},
      { src: "/images/film5.jpeg"},
      { src: "/images/film6.jpeg"},
  ];

  const slideTimer = useRef(null); //Klocka som hanterar skiftning mellan knapptryck och automatiskt byte

  useEffect(() => {
    startTimer();
    return() => clearInterval(slideTimer.current);
  }, []);

  const startTimer = () => { //Automatiska bildspelet
    slideTimer.current = setInterval(() => {
      setSlideIndex((prevIndex) => ((prevIndex + 1) % slides.length)); //Byter index/bild var 4e sekund
      }, 4000);
  };

  const stopTimer = () => { //Anropas vid knapptryck för att nollställa klockan
    clearInterval(slideTimer.current);
  };

  const plusSlides = (n) => {
    stopTimer(); // Stoppar timern när knappen används
      setSlideIndex((prevIndex) => {
        const newIndex = prevIndex + n;
        if ((newIndex) >= slides.length) { //Kollar om nästa index är utanför
          return 0;
        } else if (newIndex < 0){
          return (slides.length - 1);
        }
        return newIndex;
      });
      startTimer(); // Startar om timern
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides">
        <Link to="/Film">
          <img src={slides[slideIndex].src} alt="Filmomslag" />
          </Link>
      </div>
    
      <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
      </button>
      <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>
      </div>
  );
}

export default Slideshow;