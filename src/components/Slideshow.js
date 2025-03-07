import React, {useEffect, useState, useRef} from "react";

function Slideshow () {

    const [slideIndex, setSlideIndex] = useState(1);
    const slides = [
        "/images/film.png",
        "/images/Insidan.Ut_.2.jpg",
        "/images/film5.jpeg",
        "/images/film6.jpg",
    ];

    const slideTimer = useRef(null);

    useEffect(() => {

        startTimer();

        return() => {
            clearTimeout(slideTimer.current);
        };
    }, [slides.length]);

    const startTimer = () => {
        slideTimer.current = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex % slides.length) + 1);
        }, 4000);
        };

        const stopTimer = () => {
            clearTimeout(slideTimer.current);
        };

          const plusSlides = (n) => {
            stopTimer(); // Stoppar timern när knappen används
            setSlideIndex((prevIndex) => {
            const newIndex = prevIndex + n;
            return newIndex > slides.length ? 1 : newIndex < 1 ? slides.length : newIndex;
        });
        startTimer(); // Startar om timern
        };

        const currentSlide = (n) => {
            stopTimer(); // Stoppar timern när knappen används
            setSlideIndex(n);
            startTimer(); // Startar om timern
  };

    return (
        <div className="slideshow-container">
          <div className="mySlides">
            <a href="film.html">
              <img src={slides[slideIndex - 1]} alt="Filmomslag" />
            </a>
          </div>
    
          <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>
        </div>
      );
}

export default Slideshow;